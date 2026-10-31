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
    console.log("Testing Supabase connection...");

    const { data, error } = await supabaseClient
        .from("events")
        .select("id, event_name, status");

    if (error) {
        console.error("DATABASE ERROR:", error);
        return;
    }

    console.log("DATABASE CONNECTED!");
    console.log("Events found:", data);

    return data;
}

testConnection();
