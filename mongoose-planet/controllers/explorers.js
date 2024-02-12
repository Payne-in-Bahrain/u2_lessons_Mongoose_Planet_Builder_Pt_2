const Explorer= require('../models/explorer.js');

function newExplorer(req, res){
  Explorer.find({}).sort("name")
  .then(explorers => {
    res.render("explorers/new", {
      explorers: explorers,
      title: "Add Explorer"
    })
  })
  .catch (err => {
    console.error(err);
    res.redirect('/planets');
  })
}

function create(req, res) {
Explorer.create(req.body)
.then(explorer => {
res.redirect('/explorers/new')
})
.catch (err => {
  console.error(err);
  res.redirect('/explorers/new');
})
}


module.exports ={
  newExplorer,
  create
};