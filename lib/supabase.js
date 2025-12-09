import { createClient } from '@supabase/supabase-js'; 

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to get current user
export async function getCurrentUser() {
const { data: { user }, error } = await supabase.auth.getUser()
if (error) {
console.error('Error getting user:', error)
return null
}
return user
}
// Helper function to check if user is authenticated
export async function isAuthenticated() {
const user = await getCurrentUser()
return !!user // Returns true if user exists, false if null
}