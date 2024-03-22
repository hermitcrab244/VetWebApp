const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "1234567890",
  database: "ictprg438database",
  });

  db.connect((err) => {
    if (err) throw err;
    console.log("Connection to database established");
  });

  const PORT = process.env.PORT || 5000;
  const app = express().use(cors()).use(bodyParser.json());

//Creates end point user registration
app.post("/registration", (req, res) => {});

//Creates end point user login
app.post("/login", (req, res) => {});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });