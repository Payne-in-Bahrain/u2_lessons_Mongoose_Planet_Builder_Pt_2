var express = require('express');
const planetsCtrl = require('../controllers/planets');
var router = express.Router();

//Get 3000/planets/new
router.get('/', planetsCtrl.index);
//Get 3000/planets/new
router.get('/new', planetsCtrl.newPlanet);
//Get 3000/planets/:planetid
router.get('/:planetId', planetsCtrl.show);
//Get 3000/planets/:planetid/edit
router.get('/:planetId/edit', planetsCtrl.edit);
//Post 3000/planets
router.post('/', planetsCtrl.create);

//Post 3000/planets/ :planetId/explorers
router.post('/:planetId/explorers', planetsCtrl.addToHumans);

//delet 3000/planets/:planetid
router.delete('/:planetId', planetsCtrl.deletePlanet);
//Put 3000/planets/:planetid
router.put('/:planetId', planetsCtrl.update);


module.exports = router;
