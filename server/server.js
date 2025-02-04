const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const cors = require("cors");
const {createTables} = require("./config/db")

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



//Router
const router=require("./routes/EventRouter");
app.use("/events",router);

createTables();

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});