const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123',
    database: 'biblioteca'
});

const dbMiddleware = (req, res, next) => {
    req.db = pool;
    next();
};

module.exports = dbMiddleware;
