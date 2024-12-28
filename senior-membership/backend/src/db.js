// db.js
import env from "dotenv";
import pkg from 'pg';
const { Pool } = pkg;

env.config();

/**
 * 1) Create a single Pool instance with your env vars
 */
export const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

/**
 * 2) (Optional) Listen for error events on the pool
 */
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

/**
 * 3) If you want a helper function for quick queries,
 *    you can still export it for convenience:
 */
export const query = (text, params) => {
  return pool.query(text, params);
};

/**
 * 4) (Optional) If you want to test immediate connectivity,
 *    you can do something like:
 */
// pool.connect()
//   .then((client) => {
//     console.log("Postgres connected!");
//     client.release();
//   })
//   .catch((err) => console.error("Connection error", err));
