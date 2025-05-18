interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
  readonly WP_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}