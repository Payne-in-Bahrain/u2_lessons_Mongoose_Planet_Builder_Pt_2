const Planet= require('../models/planet.js');
const Explorer= require('../models/explorer.js');

const newPlanet = (req, res) => {
	res.render('planets/new', {title: "Add Planet"});
}

const create = async(req, res) => {
  try {
const planet = new Planet(req.body);
    if (planet.name) {
      planet.name = planet.name.toUpperCase();
    }
    for (let key in req.body) {
      if (req.body[key] === '') 
        delete req.body[key];
          }	 
    await planet.save();
        console.log(planet);
        // for now, redirect right back to new.ejs
        res.redirect(`/planets/${planet._id}`);
      } catch (err) {
        console.error(err);
        res.redirect('/planets/new');
      }
}
 function index(req, res) {
  Planet.find({})
  .then(planets => {
    res.render("planets/index", {planets: planets,
      title: 'All Planets'
    })
  })
  .catch (err => {
    console.error(err);
    res.redirect('/');
 })
}

function show(req,res) {
  Planet.findById(req.params.planetId)
  .populate('humans')
  .then(planet => {
    Explorer.find({_id: {$nin: planet.humans}})
    .then(explorers => {
      console.log(explorers)
      res.render("planets/show",{
        planet: planet,
        title: "Planet Detail"
    })
    })
  })
  .catch (err => {
    console.error(err);
    res.redirect('/');
 })
}

function deletePlanet(req, res) {
  Planet.findByIdAndDelete(req.params.planetId)
  .then(planet => {
    res.redirect('/planets')
    })
  .catch(err => {
    console.error(err);
    res.redirect('/planets');
 })
}

function edit(req, res) {
  Planet.findById(req.params.planetId)
  .then(planet => {
    res.render('planets/edit',{
      planet: planet,
      title: "Edit Planet"
    })
    })
  .catch(err => {
    console.error(err);
    res.redirect('/planets');
 })
}

function update(req, res) {
  try {
    const planet = req.body;

    if (planet.name) {
      planet.name = planet.name.toUpperCase();
    }

    for (let key in planet) {
      if (planet[key] === '') {
        delete planet[key];
      }
    }

    Planet.findByIdAndUpdate(req.params.planetId, planet, { new: true })
      .then(updatedPlanet => {
        res.redirect(`/planets/${updatedPlanet._id}`);
      })
      .catch(err => {
        console.error(err);
        res.redirect('/planets');
      });
  } catch (err) {
    console.error(err);
    res.redirect('/planets');
  }
}

function addToHumans(req, res) {
  //find the planet 
  Planet.findById(req.params.explorerId)
  .then(planet => {
  // add the explorerId to the Humans array 
  planet.humans.push(req.body.explorerId)
  // save the planet
  planet.save()
  .then(() => {
  // rdirect to the plant show view
  res.redirect(`/planets/${planet._id}`)
})
.catch (err => {
  console.error(err);
  res.redirect('/planets');
 })
})
.catch (err => {
  console.error(err);
  res.redirect('/planets');
})
}

module.exports = {
  newPlanet,
  create,
  index,
  show,
  deletePlanet,
  edit,
  update,
  addToHumans,
}