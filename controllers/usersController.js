const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/users', (req, res) => {
  db.Users.findAll({
    // INNER JOIN on comments
    include: [db.Comments]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.get('/api/users/:id', (req, res) => {
  db.Users.findAll({
    where: {
      id: req.params.id
    },
    // INNER JOIN on comments
    include: [db.Comments]
  })
  .then(results => res.json(results))
  .catch(error => res.json(error))
});

router.post('/api/users', (req, res) => {
 
  db.Users.create(req.body)
  .then((response) => res.status(200).json(response))
  .catch(error => res.status(500).json(error))
})

module.exports = router;