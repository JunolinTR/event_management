const express = require("express");
const router = express.Router();
const { createEvent } = require("../models/CreateEvent.js");
const {connectToDB} = require("../config/db");

// POST route to create an event
router.post("/create", async (req, res) => {
    const { event_name, location, date, available_seats } = req.body;

    if (!event_name || !location || !date || !available_seats) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const result = await createEvent(event_name, location, date, available_seats);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "Database error" });
    }
});

router.get("/", async(req,res) => {
    const db = await connectToDB();
    const [results] = await db.query("SELECT event_name, location FROM events");
    await db.end();
    res.json(results);
});
    


module.exports = router;
