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


const HamRoute = require('./routes/test.route');
app.use('/test',HamRoute);

app.listen(3001, () => {
    console.log("Yey, your server is running on http://localhost:3001/");
});