import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jmoaiegncsskukvzcely.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imptb2FpZWduY3Nza3VrdnpjZWx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwNDU1ODIsImV4cCI6MjA1NTYyMTU4Mn0.5mzmZFzgq-oWpzcstC65PbCCC-GEgnxB7fHxjRiCnyE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
