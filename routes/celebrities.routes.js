// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here~

const Celebrity = require('../models/Celebrity.model')

router.get('/celebrities/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    res.render('celebrities/new-celebrity.hbs');
  });
  
  router.post('/celebrities/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    const {name,occupation,catchPhrase}= req.body;
  
    Celebrity.create({name,occupation,catchPhrase})
      .then(()=>{
          //console.log('Drone created',createDrones)
          res.redirect('/celebrities')
  }) .catch((err)=>{
    next(err);W
  })
  });

router.get('/celebrities', (req, res, next) => {
    
    Celebrity.find()
    .then((celebritiesFromDb)=>{
      console.log(celebritiesFromDb);
        res.render('celebrities/celebrities.hbs',{celebrities:celebritiesFromDb});
    })
    .catch((err)=>{
        next(err);
    })
   
  });
module.exports = router;