const mysql = require("mysql2/promise");

async function connectToDB() {
    try{

        const db = await mysql.createConnection({
            host: 'roundhouse.proxy.rlwy.net',
            user: 'root',
            password: 'YEpAzOdCYFjRFPgRmdtJtRwdhktFFBiT',
            database: 'event_management',
            port: 13843
        });
        return db;
    }catch(err){
        console.error("Error connecting to Db", err);
    }

}

connectToDB();

async function createTables(){
    try {
        const db = await connectToDB();

        await db.execute(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            )
        `);

        await db.execute(`
            CREATE TABLE IF NOT EXISTS events (
                id INT AUTO_INCREMENT PRIMARY KEY,
                event_name VARCHAR(255) NOT NULL,
                location VARCHAR(256) NOT NULL,
                date DATE NOT NULL,
                available_seats INT NOT NULL
            )
        `);

        await db.execute(`
            CREATE TABLE IF NOT EXISTS bookings (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_id INT NOT NULL,
                event_id INT NOT NULL,
                seats_booked INT NOT NULL,
                booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id),
                FOREIGN KEY (event_id) REFERENCES events(id)
            )
        `);

        

        await db.execute(`
            CREATE TABLE IF NOT EXISTS admin (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
            )
        `);

        console.log("Database and tables initialized successfully.");
        await db.end();
    } catch(error) {
        console.log("Error creating tables", error);
    }
};


module.exports = { connectToDB, createTables };