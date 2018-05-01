const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


router.get('/:id', (req, res)=>{
  knex('videos')
  .where('id', req.params.id)
  .first()
  .then((video)=>{
    res.render('player', {video})
  })
})


module.exports = router;
