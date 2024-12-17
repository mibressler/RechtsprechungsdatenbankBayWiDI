// plugins/supabase.js
import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project details
const supabaseUrl = 'https://<your-project-ref>.supabase.co';
const supabaseKey = '<anon-public-key>';

export const supabase = createClient(supabaseUrl, supabaseKey);