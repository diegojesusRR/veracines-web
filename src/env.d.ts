/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly API_URL: string
	/** URL del proyecto de Supabase (Project Settings → API) */
	readonly SUPABASE_URL?: string
	/** Clave pública anon: solo lectura gracias a RLS */
	readonly SUPABASE_ANON_KEY?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare global {
	interface Window {
		toast: function
	}
}
