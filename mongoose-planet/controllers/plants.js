const Planet = require('../models/planet');

async function createPlant(req, res) {
  try {
    const planet = await Planet.findById(req.params.id);
    // we push an object with the data for the 
    // review sub-doc into Mongoose arrays
    planet.plants.push(req.body);
    // Not saving sub-doc, but the top level document.
    await planet.save();
    res.redirect(`/planets/${planet._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}


module.exports = {
  createPlant
};