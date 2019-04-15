import { Pool, PoolClient, QueryResult } from 'pg';
import * as dotenv from 'dotenv';

const result = dotenv.config()

if (result.error) {
  throw result.error
}

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT),
});


export let query = (text: string, params: any[]) => pool.query(text, params);

export let transaction = async (callback: (client: PoolClient) => Promise<QueryResult>) => {
    // note: we don't try/catch this because if connecting throws an exception
    // we don't need to dispose of the client (it will be undefined)
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        const r = await callback(client);

        await client.query('COMMIT');

        return r;
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }
}
