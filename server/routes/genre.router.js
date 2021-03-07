const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const genreQuery = `
  SELECT "genres".name FROM "genres"
  `;

  pool.query(genreQuery)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
  });

module.exports = router;