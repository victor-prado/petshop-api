import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }
    
    const pool = new pg.Pool({
        connectionString: "postgresql://postgres.pitwsfdrxawezmnpsvvk:comput&ro45@aws-0-sa-east-1.pooler.supabase.com:6543/postgres"
    });
    global.connection = pool;

    return pool.connect();
}

export default {
    connect
}