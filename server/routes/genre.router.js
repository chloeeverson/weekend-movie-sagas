const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // return all genres
  const queryText = `SELECT * FROM genres ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

//getting movie_genre data from database to store in reducer 
//and use for rendering genres on detail dom specific to each movie
router.get('/moviegenre', (req, res) => {
  // 
  const queryText = `SELECT * FROM movies_genres`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;