const router = require('express').Router();
const { Joke, User } = require('../../models');

router.get('/', (req,res)=>res.render('login'))

module.exports = router;