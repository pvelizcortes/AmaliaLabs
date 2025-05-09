import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mgrecjtjtfpdyjoumcsg.supabase.co'; // reemplaza con tu URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ncmVjanRqdGZwZHlqb3VtY3NnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNDI1NDksImV4cCI6MjA2MTgxODU0OX0.nlrprCJm5b8loGmX0379cYG97aDBTP-vNm-zDUNscuM'; // reemplaza con tu clave pública (anon)

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);