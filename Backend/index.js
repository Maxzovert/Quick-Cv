const express = require("express");
const dotenv = require("dotenv").config();
const connectdb = require("./Config/db");
const cors = require('cors');


connectdb();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/user" , require("./Routes/route"));

app.listen(port, () => {
    console.log("Server Running")
});