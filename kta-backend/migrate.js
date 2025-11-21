const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

const sqlFile = __dirname + '/schema.sql';
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL not set; aborting migrations');
  process.exit(1);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function run() {
  try {
    const sql = fs.readFileSync(sqlFile, 'utf8');
    // naive split by ';' to run statements sequentially
    const statements = sql.split(/;\s*\n/).map(s => s.trim()).filter(Boolean);
    for (const stmt of statements) {
      console.log('Running:', stmt.slice(0, 80).replace(/\n/g, ' ') + (stmt.length>80? '...' : ''));
      await pool.query(stmt);
    }
    console.log('Migrations finished');
  } catch (err) {
    console.error('Migration error', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

run();
