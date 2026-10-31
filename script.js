// TALANTA STADIUM - SUPABASE CONNECTION

const SUPABASE_URL = "https://kiipcjwnyrqbjqfucmfw.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_0Hr35b9Cx1z6vmGG_dg0dA_1P3tnuL-";

// Initialize Supabase
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

// Test database connection
async function testConnection() {

    const { data, error } = await supabaseClient
        .from("events")
        .select("*")
        .eq("status", "published");

    if (error) {
        console.error("Database connection failed:", error);
        return;
    }

    console.log("Connected to Talanta Stadium database!");
    console.log("Available events:", data);
}

testConnection();
