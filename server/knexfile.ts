import path from 'path';

module.exports = {
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'password',
        database : 'nlw',
        filename: path.resolve(__dirname, 'src', 'database', 'database.mysql')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
};

//npx knex migrate:latest --knexfile knexfile.ts migrate:latest