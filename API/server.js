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
app.post("/registration-customer", (req, res) => {
  const {
    firstName,
    lastName,
    contactNumber,
    email,
    suburb,
    postcode,
    password,
  } = req.body;

  const existingUserCheck = "SELECT * FROM customers WHERE email = ?";
  db.query(existingUserCheck, [email], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Validation Error" });
    } else {
      if (results.length > 0) {
        res.status(409).json({ message: "User already exists" });
      } else {
        const insertQuery = `INSERT INTO customers (first_name, last_name, phone, email, suburb, postcode, password) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        db.query(
          insertQuery,
          [
            firstName,
            lastName,
            contactNumber,
            email,
            suburb,
            postcode,
            password,
          ],
          (err, result) => {
            if (err) {
              res.status(500).json({ message: "Registration Error" });
            } else {
              const customerID = result.insertId;
              res.status(200).json({
                message: "Registration successful",
                data: {
                  customer_id: customerID,
                  firstName,
                  lastName,
                  contactNumber,
                  email,
                  suburb,
                  postcode,
                },
              });
            }
          }
        );
      }
    }
  });
});

app.post("/registration-pet", (req, res) => {
  const { customerID, petType, petName, petBreed, petAge, petGender } =
    req.body;

  const insertQuery = `INSERT INTO pets (customer_id, pet_type, pet_name, pet_breed, pet_age, pet_sex) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(
    insertQuery,
    [customerID, petType, petName, petBreed, petAge, petGender],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Registration Failed" });
      } else {
        const petID = result.insertId;
        res.status(200).json({
          message: "Registration successful",
          data: {
            pet_id: petID,
            customerID,
            petType,
            petName,
            petBreed,
            petAge,
            petGender,
          },
        });
      }
    }
  );
});

//Creates end point user login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const insertQuery =
    "SELECT * FROM customers WHERE email = ? AND password = ?";
  db.query(insertQuery, [email, password], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Login Error" });
    } else {
      if (results.length === 1) {
        const user = results[0];
        const {
          customer_id,
          first_name,
          last_name,
          phone,
          email,
          suburb,
          postcode,
          password,
        } = user;

        res.status(200).json({
          message: "Login Successful",
          user: {
            customer_id,
            first_name,
            last_name,
            phone,
            email,
            suburb,
            postcode,
            password,
          },
        });
      } else {
        res.status(401).json({ message: "Invalid username or password" });
      }
    }
  });
});

app.post("/retrieve-user-pets", (req, res) => {
  const { customerID } = req.body;

  const insertQuery = "SELECT * FROM pets WHERE customer_id = ?";
  db.query(insertQuery, [customerID], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error retriving pets list" });
    } else {
      if (results.length > 0) {
        res.status(200).json({ pets: results });
      } else {
        res.status(404).json({ message: "No pets found" });
      }
    }
  });
});

app.post("/retrieve-all-dogs", (req, res) => {
  const { petType } = req.body;
  const insertQuery = "SELECT * FROM pets WHERE pet_type = ?";
  db.query(insertQuery, [petType], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Error retrieving dogs" });
    } else {
      res.status(200).json({ dogs: results });
    }
  });
});

app.post("/send-invitation", (req, res) => {
  const { invitationCode, senderID, receiverID, date, time, message, status } =
    req.body;

  const insertQuery = `INSERT INTO invitations (invitation_code, sender_id, receiver_id, date, time, message, status) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(
    insertQuery,
    [invitationCode, senderID, receiverID, date, time, message, status],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Invitation Failed" });
      } else {
        res.status(200).json({
          message: "Registration successful",
        });
      }
    }
  );
});

app.post("/check-invites", (req, res) => {
  const { customerID } = req.body;

  const insertQuery = `SELECT * FROM invitations WHERE receiver_id = ?`;
  db.query(insertQuery, [customerID], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Invitation Check Failed" });
    } else {
      if (results.length > 0) {
        res.status(200).json({ invitations: results });
      } else {
        res.status(200).json({ invitations: [] });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
