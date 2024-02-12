const express = require('express');
const router = express.Router();
const plantsCtrl = require('../controllers/plants');
// You Do - Require the yet to be created reviews controller 


// POST /planets/:planetId/plants
router.post('/planets/:id/plants', plantsCtrl.createPlant);


module.exports = router