// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from "electron";
import { CasparCG } from "casparcg-connection";

const config_the_sane_variable_of_doom = import.meta.env
console.log(config_the_sane_variable_of_doom)

if (!config_the_sane_variable_of_doom.VITE_APP_CASP_CG_IP) console.error('Missing configuration')

    console.log('casg', 'Initializing CasparCG connection...');
    const ccg_client = new CasparCG({
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
            };
            console.warn('casg', 'Still waiting for CasparCG connection...');
        }, 100);
    }));

    client_ready_promise().then(() => {
        console.log('casg', 'Initialized Caspar client, so uh vijeo games?');
    });
    
} catch (pokemon) {
    console.error('casg', pokemon);
}
const cPlay = async (chan, layr, loop, file) => {
    // if (!clients.ccg) return {
    //     error: 'Missing CCG client',
    //     data: null
    // }

    console.log('cplay args', chan, layr, loop, file)

    console.log('cplay', ccg_client)

    const { error } = await ccg_client.play({
        channel: chan,
        layer: layr,
        loop,
        clip: file
    });

    if (error) console.error('casg', 'cPlay failed', error);
};

 const cClear = async (chan, layr) => {
    // if (!clients.ccg) return {
    //     error: 'Missing CCG client',
    //     data: null
    // }

    console.log('cclear args', chan, layr)

    const { error } = await ccg_client.clear({
        channel: chan,
        layer: layr
    });

    if (error) console.error('casg', 'cClear failed', error);
};  

contextBridge.exposeInMainWorld('casparAPI', {
    play: (...opts) => cPlay(...opts),
    clear: (...opts) => cClear(...opts),
    isConnected: () => ccg_client.connected
});