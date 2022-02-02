const express = require('express');
const router = express.Router();

router.get("/test", (req, res) => {
    db.query("SELECT * FROM user", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});