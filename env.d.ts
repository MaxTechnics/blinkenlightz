// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

import { type CasparCG } from "casparcg-connection";

interface ImportMetaEnv {
    readonly VITE_APP_SUPABASE_URL: string;
    readonly VITE_APP_SUPABASE_KEY: string;
    readonly VITE_APP_CASP_CG_IP: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

export interface BlinkenCasparClearParams {
    chan: number;
    layr: number;
}

export interface BlinkenCasparPlayParams {
    channel: number;
    layer: number;
    loop: boolean;
    clip?: string;
}

export interface BlinkenCasparLoadParams {
    channel: number;
    layer: number;
    clip: string;
}

declare global {
    interface Window {
        casparAPI: {
            init: () => Promise<{ success: true, error: null } | { success: false, error: string }>;
            play: (params: BlinkenCasparPlayParams) => Promise<{ success: true, error: null } | { success: false, error: string }>;
            clear: (params: BlinkenCasparClearParams) => Promise<{ success: true, error: null } | { success: false, error: string }>;
            load: (params: BlinkenCasparLoadParams) => Promise<{ success: true, error: null } | { success: false, error: string }>;
            isConnected: () => boolean;
            ccg_client: CasparCG
        };
    }
}

export { }
