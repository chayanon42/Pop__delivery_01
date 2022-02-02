const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// root hFUfJe13bG 20.205.248.11
const db = mysql.createConnection({
  user: "root",
  host: "20.205.248.11",
  password: "hFUfJe13bG",
  database: "my_database",
});

app.get("/test", (req, res) => {
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// create a new user
app.post('/create', (req, res) => {
  const frist_name = req.body.frist_name;
  const last_name = req.body.last_name;
  const address = req.body.address;
  const username = req.body.username;
  const password = req.body.password;
  const phone = req.body.phone;
  const email = req.body.email;
  const role_id = req.body.role_id;
  const isacvive = req.body.isacvive;
  const active_by = req.body.active_by;

  // validation
  if ('') {
      return res.status(400).send({ error: true, message: "Please provide book frist_name and last_name."});
  } else {
      db.query('INSERT INTO user (frist_name, last_name, address, username, password,phone,email,role_id,isacvive,active_by) VALUES(?,?,?,?,?,?,?,?,?,?)', 
      [frist_name, last_name, address, username, password,phone,email,role_id,isacvive,active_by], (error, results, fields) => {
          if (error) throw error;
          return res.send({ error: false, data: results, message: "Book successfully added"})
      })
  }
});


// const HamRoute = require('./routes/test.route');

// app.use('/',HamRoute);



app.listen(3001, () => {
  console.log("Yey, your server is running on http://localhost:3001/");
});
module.exports = db;