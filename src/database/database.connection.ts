import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pg;

const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
} = process.env;
  
const connection = new Pool({
    host: DB_HOST,
    port: parseInt(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});
  
export default connection;