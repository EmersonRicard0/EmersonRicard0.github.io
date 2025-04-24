
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fkbjghqhitzhohkhqdla.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrYmpnaHFoaXR6aG9oa2hxZGxhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTQ2MjY1OSwiZXhwIjoyMDYxMDM4NjU5fQ.wE45_RfJuwhHjX9z6Su8m1AUjWyqbMLxjq8K2bpItFg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
