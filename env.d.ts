// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_SUPABASE_URL: string;
    readonly VITE_APP_SUPABASE_KEY: string;
    readonly VITE_APP_CASP_CG_IP: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
