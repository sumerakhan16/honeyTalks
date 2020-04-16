const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/comments', (req, res) => {
  db.Comments.findAll({
    include: [db.Users]
  })
  .then(results => res.json(results))
  .catch(error => {
    console.log(error)
    res.status(500).json(error)
  })
});

router.get('/api/comments', (req, res) => {
    db.Comments.findAll({
      include: [db.Media]
    })
    .then(results => res.json(results))
    .catch(error => {
      console.log(error)
      res.status(500).json(error)
    })
  });

router.post('/api/comments', (req, res) => {

  db.Comments.create(req.body)
  .then((results) => res.status(200).json(results))
  .catch(error => res.status(500).json(error))
});

router.delete('/api/comments/:id', (req, res) => {
  db.Comments.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((results) => res.status(200).json(results))
  .catch(error => res.status(500).json(error))
});

module.exports = router;