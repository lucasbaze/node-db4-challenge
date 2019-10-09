// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'lucasbazemore',
            database: 'lucasbazemore',
        },
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },
};
