const express = require("express");
const router = express.Router();
const axios = require('axios')
const Lists = require('../models/lists')
const omdbRootUrl = 'http://www.omdbapi.com/?'
const apiKey = `&apikey=9251ce8f`//enter key here

router.get("/search/:keywords", async (req, res, next) => {
  const movie = await axios.get(omdbRootUrl + `s=${req.params.keywords}&type=movie` + apiKey)
  res.status(200).json(movie.data);

});

router.post('/', async (req, res, next) => {
  const list = new Lists({
    user: req.body.user,
    list: req.body.list
  })
  try {
    const savePost = await list.save()
    console.log('save', savePost)
    res.status(200).json({ savePost })
  } catch (error) {
    console.log(error)
  }
})

router.get('/list/:id', async (req, res, next) => {
  const listId = req.body.id
  try {
    const post = await Lists.findOne({
      user: listId//for testing use "john's list-LwS5Bm"
    })
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
