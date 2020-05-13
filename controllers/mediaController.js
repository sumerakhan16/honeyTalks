const express = require('express');
const router = express.Router();
const db = require('../models');
const axios = require("axios");

router.get('/api/media', (req, res) => {
  db.Media.findAll({
    // INNER JOIN on comments
    include: [db.Comments]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.get('/api/media/:id', (req, res) => {
  db.Media.findAll({
    where: {
      id: req.params.id
    },
    // INNER JOIN on comments
    include: [db.Comments]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.post('/api/media', (req, res) => {
 
  db.Media.create(req.body)
  .then((response) => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})


router.get("/search/movie/:movie", (req, res) => { 


axios({
    "method":"GET",
    "url":"https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + req.params.movie,
    "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"imdb-internet-movie-database-unofficial.p.rapidapi.com",
      "x-rapidapi-key":"17bd1bd9b5msh60e871aa6d94c0dp13ef8djsn2cfcd543f5e3"
    }
  })
  .then((response)=> res.json(response.data))
  .catch((error)=> res.json(error))
})

module.exports = router;
