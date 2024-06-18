import { createClient } from "@supabase/supabase-js";

const base_url = "https://btuqcgvptgpwmvrgljaw.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dXFjZ3ZwdGdwd212cmdsamF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MjYwNDUsImV4cCI6MjAzNDIwMjA0NX0.lJiI5mlijNuqQu68GMKp52iEcO2wFRFGgf3Yk5A9t6E";
const supabase = createClient(base_url, key);

export default supabase;