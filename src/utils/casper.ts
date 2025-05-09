import { CasparCG } from "casparcg-connection";

export const initCaspar = async () => {
const config_the_sane_variable_of_doom = import.meta.env
console.log(config_the_sane_variable_of_doom)

    if (!config_the_sane_variable_of_doom.VITE_APP_CASP_CG_IP) return {
        error: 'Missing configuration',
        data: null
    }

    try {
        console.log('casg', 'Initializing CasparCG connection...');
        const client = new CasparCG({
            host: config_the_sane_variable_of_doom.VITE_APP_CASP_CG_IP
        });

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

        await client_ready_promise();

        console.log('casg', 'Initialized Caspar client, so uh vijeo games?');
        return {
            data: client,
            error: null
        }

    } catch (pokemon) {
        console.error('casg', pokemon);
        return {
            error: `Error initializing Caspar client: ${pokemon.message}`,
            data: null
        }
    }
}
