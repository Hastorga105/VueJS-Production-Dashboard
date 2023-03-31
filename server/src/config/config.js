module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'proyecto',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '12345',
        options: {
            dialect: process.env.DIALECT || 'mssql',
            host: process.env.HOST || 'localhost',
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}