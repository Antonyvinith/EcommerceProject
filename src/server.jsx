// server.js

const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const mysql = require("mysql");

const app = express();
const port = 3001;
const cors = require("cors");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Antony@123",
  database: "login_details",
  port: 3306,
});

app.use(bodyParser.json());
app.use(cors());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Check if user exists in the database
  connection.query(
    "SELECT * FROM login_details WHERE username = ?",
    [username],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        if (results.length === 0) {
          res.status(401).json({ error: "Invalid username or password" });
        } else {
          const user = results[0];
          // Compare password hash
          bcrypt.compare(password, user.passwordHash, (err, result) => {
            if (err) {
              res.status(500).json({ error: "Internal Server Error" });
            } else if (!result) {
              res.status(401).json({ error: "Invalid username or password" });
            } else {
              res.json({ message: "Login successful" });
            }
          });
        }
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
