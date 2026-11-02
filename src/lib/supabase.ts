import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const url = import.meta.env.SUPABASE_URL
const anonKey = import.meta.env.SUPABASE_ANON_KEY

export const isSupabaseConfigured = Boolean(url && anonKey)

/**
 * Cliente de Supabase de solo lectura (clave anon + RLS).
 * Solo se usa en el servidor: las variables no llevan prefijo PUBLIC_.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured
	? createClient(url!, anonKey!, { auth: { persistSession: false } })
	: null
