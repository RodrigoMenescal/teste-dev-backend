import dotenv from 'dotenv';
import pg from 'pg'

dotenv.config();

const { Pool } = pg
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.connect()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.error('Erro ao conectar ao banco de dados', err));

process.on('exit', () => {
    pool.end().then(() => console.log('Conexões encerradas'));
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
