import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ozwznokcddftnezigzau.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96d3pub2tjZGRmdG5lemlnemF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg3ODg2ODMsImV4cCI6MTk5NDM2NDY4M30.og08ecgtaC09sA-UQ1QyAhzUhx_7_Tf5FwYWDxnVuBI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
