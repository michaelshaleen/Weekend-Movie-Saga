const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  const idToUpdate = req.params.id;
  console.log(idToUpdate, 'ID TO UPDATE')

  const genreQuery = `
  SELECT "genres".name FROM "genres"
  JOIN "movies_genres" ON "genres".id = "movies_genres".genre_id
  JOIN "movies" ON "movies_genres".movie_id = "movies".id
  WHERE "movies".id = $1; 
  `;

  pool.query(genreQuery, [idToUpdate])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
  });

module.exports = router;