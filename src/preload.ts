// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from "electron";
import { CasparCG } from "casparcg-connection";
import type { BlinkenCasparClearParams, BlinkenCasparLoadParams, BlinkenCasparPlayParams } from "../env";

const config_the_sane_variable_of_doom = import.meta.env
console.log(config_the_sane_variable_of_doom);

let ccg_client: CasparCG | undefined = undefined;

const initialize = async () => {
    if (!config_the_sane_variable_of_doom.VITE_APP_CASP_CG_IP) {
        console.error('CCG Link Missing configuration')
        return {
            success: false,
            error: 'Missing CCG Link configuration'
        }
    }

    console.log('casg', 'Initializing CasparCG connection...');
    ccg_client = new CasparCG({
        host: config_the_sane_variable_of_doom.VITE_APP_CASP_CG_IP
    });

    try {
        ccg_client.connect();

        const client_ready_promise = () => (new Promise<void>((resolve) => {
            if (ccg_client.connected) return resolve();
            console.warn('casg', 'Waiting for CasparCG connection...');
            const int = setInterval(() => {
                if (ccg_client.connected) {
                    clearInterval(int);
                    return resolve();
                }
                console.warn('casg', 'Still waiting for CasparCG connection...');
            }, 100);
        }));

        await client_ready_promise();
        console.log('casg', 'Initialized Caspar client, so uh vijeo games?');
        return {
            success: true,
            error: null
        }

    } catch (pokemon) {
        console.error('casg', pokemon);
        return {
            success: false,
            error: 'Failed to connect to CasparCG'
        }
    }
}

const cLoad = async (params: BlinkenCasparLoadParams) => {
    const { channel: chan, layer: layr, clip: file } = params;
    if (!ccg_client) return {
        success: false,
        error: 'Missing CCG client'
    }

    console.log('cload args', chan, layr, file)

    console.log('cload', ccg_client)

    const { error } = await ccg_client.load({
        channel: chan,
        layer: layr,
        clip: file
    });

    if (error) {
        console.error('casg', 'cLoad failed', error);
        return {
            success: false,
            error: 'Failed to load'
        }
    }

    return {
        success: true,
        error: null
    }
};

const cPlay = async (params: BlinkenCasparPlayParams) => {
    const { channel: chan, layer: layr, loop, clip: file } = params;
    if (!ccg_client) return {
        success: false,
        error: 'Missing CCG client'
    }

    console.log('cplay args', chan, layr, loop, file)

    console.log('cplay', ccg_client)

    const { error } = await ccg_client.play({
        channel: chan,
        layer: layr,
        loop,
        clip: file
    });

    if (error) {
        console.error('casg', 'cPlay failed', error);
        return {
            success: false,
            error: 'Failed to play'
        }
    }

    return {
        success: true,
        error: null
    }
};

const cClear = async (params: BlinkenCasparClearParams) => {
    const { chan, layr } = params;
    if (!ccg_client) return {
        success: false,
        error: 'Missing CCG client'
    }

    console.log('cclear args', chan, layr)

    const { error } = await ccg_client.clear({
        channel: chan,
        layer: layr
    });

    if (error) {
        console.error('casg', 'cClear failed', error);
        return {
            success: false,
            error: 'Failed to clear'
        }
    }

    return {
        success: true,
        error: null
    }
};

contextBridge.exposeInMainWorld('casparAPI', {
    init: async () => initialize(),
    play: async (params: BlinkenCasparPlayParams) => cPlay(params),
    clear: async (params: BlinkenCasparClearParams) => cClear(params),
    load: async (params: BlinkenCasparLoadParams) => cLoad(params),
    isConnected: () => ccg_client.connected,
    ccg_client
});
