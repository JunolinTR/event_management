const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "nilonuj7",
    database: "event_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const railwaydb = mysql.createConnection({
    host: 'mysql.railway.internal',
    user: 'root',
    password: 'YEpAzOdCYFjRFPgRmdtJtRwdhktFFBiT',
    database: 'event_management',
    port: 3306
});

railwaydb.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to Railway MySQL was succesful');
});
module.exports = db;
module.exports = railwaydb;
