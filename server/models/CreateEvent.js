const {connectToDB} = require("../config/db"); 

// Function to create an event
const createEvent = async (event_name, location, date, availableSeats) => {
    try {
        const db = await connectToDB();
        const sql = `
            INSERT INTO events (event_name, location, date, available_seats) 
            VALUES (?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [event_name, location, date, availableSeats]);
        await db.end();
        return { eventId: result.insertId, message: "event has been created" };
    } catch (error) {
        console.error("Error creating event:", error);
        throw error;
    }
};

module.exports = { createEvent };
