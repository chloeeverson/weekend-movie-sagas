const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // get details for specific movie id
  let reqId = req.params.id;
  console.log('GET request for id', reqId);
  let sqlText = 'SELECT * FROM movies WHERE id=$1;';
  pool.query(sqlText, [reqId])
    .then((result) => {
        console.log('details retrieved');
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`error getting details from database ${sqlText}`, error);
        res.sendStatus(500)   
    })
});

module.exports = router;