var express = require('express');
const explorersCtrl = require('../controllers/explorers.js');
var router = express.Router();

//Get 3000/explorers/new
router.get('/new', explorersCtrl.newExplorer);
//Post 3000/explorers/new
router.post('/', explorersCtrl.create)

module.exports = router;
