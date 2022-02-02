const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "20.205.248.11",
    password: "hFUfJe13bG",
    database: "my_database",
  });

//   root hFUfJe13bG 20.205.248.11

app.get("/test", (req, res) => {
    db.query("SELECT * FROM tset", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});
app.listen(3001, () => {
    console.log("Yey, your server is running on http://localhost:3001/");
});