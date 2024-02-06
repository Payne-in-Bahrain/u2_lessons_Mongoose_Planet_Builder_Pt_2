var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('planet/index', { title: 'All Planets' })
})

module.exports = router
