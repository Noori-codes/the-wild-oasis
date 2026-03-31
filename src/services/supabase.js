// @ts-check
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ekwthlhwetptwilbtsda.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrd3RobGh3ZXRwdHdpbGJ0c2RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3OTczOTgsImV4cCI6MjA4NjM3MzM5OH0.j-cHVTSP5Ae7Zs4RmXo6t4Xs0CqCv_7Cc2-OaIiNXUM";

/** @type {import('@supabase/supabase-js').SupabaseClient} */
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
