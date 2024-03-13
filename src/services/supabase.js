import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bcfxfivgypjqtpjtxhqu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZnhmaXZneXBqcXRwanR4aHF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5NTM3ODEsImV4cCI6MjAyMjUyOTc4MX0.dXstTJwCvsIEe6aaPo2SXkci7fclsknpYzHprtye19g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export { supabaseUrl };
