import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'password',
        database : 'nlw',
        filename: path.resolve(__dirname, 'database.mysql')
    },
    useNullAsDefault: true
});

export default connection;

//Migrations: histórico do banco de dados
//
