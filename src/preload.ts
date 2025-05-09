// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from "electron";
import { CasparCG } from "casparcg-connection";

const config_the_sane_variable_of_doom = import.meta.env
console.log(config_the_sane_variable_of_doom)

if (!config_the_sane_variable_of_doom.VITE_APP_CASP_CG_IP) console.error('Missing configuration')

    console.log('casg', 'Initializing CasparCG connection...');
    const client = new CasparCG({
        host: config_the_sane_variable_of_doom.VITE_APP_CASP_CG_IP
    });
try {

    client.connect();

    const client_ready_promise = () => (new Promise<void>((resolve) => {
        if (client.connected) return resolve();
        console.warn('casg', 'Waiting for CasparCG connection...');
        const int = setInterval(() => {
            if (client.connected) {
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

contextBridge.exposeInMainWorld('casparAPI', {
    sendCommand: (cmd) => client.sendCommand(cmd), // example
    play: (opts) => client.play(opts),
    clear: ({chan, layr}) => client.clear({
        channel: chan,
        layer: layr
    }),
    isConnected: () => client.connected
});