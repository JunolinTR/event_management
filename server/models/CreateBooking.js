const db = require("../config/db"); 

// Function to create an event
const createBooking = async (bookingId, eventId, ticketType, numberOfSeats) => {
    try {
        const sql = `
            INSERT INTO bookings (bookingId, eventId, ticketType, numberOfSeats) 
            VALUES (?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [bookingId, eventId, ticketType, numberOfSeats]);
        return { eventId: result.insertId, message: "Booking done successfully" };
    } catch (error) {
        console.error("Error creating event:", error);
        throw error;
    }
};

module.exports = { createEvent };
