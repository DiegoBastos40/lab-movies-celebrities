// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here


const Movies = require('../models/Movies.model')
const Celebrity = require('../models/Celebrity.model')

router.get('/movies/create', (req, res, next) => {
    Celebrity.find()
    .then((celebritiesFromDb)=>{
      console.log(celebritiesFromDb);
        res.render('movies/new-movies',{celebrities:celebritiesFromDb});
    })
    .catch((err)=>{
        next(err);
    })
   
  });

    // Iteration #3: Add a new drone
  router.post('/movies/create', (req, res, next) => {
    // Iteration #3: Add a new drone
    const {title,genre,plot}= req.body;
  
    Movies.create({title,genre,plot})
      .then(()=>{
          //console.log('Drone created',createDrones)
          res.redirect('/movies')
  }) .catch((err)=>{
    next(err);W
  })
  });

router.get('/movies', (req, res, next) => {
    
    Movies.find()
    .then((moviesFromDb)=>{
      console.log(moviesFromDb);
        res.render('movies/movies.hbs',{movies:moviesFromDb});
    })
    .catch((err)=>{
        next(err);
    })
   
  });
  router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params
    Movies.findById(movieId)
    .populate('cast')
        .then(movieFromDb => {
            console.log('onemovie:', movieFromDb)
            res.render('movies/movies-details', {onemovie: movieFromDb})
        })
        .catch(e => {
            console.log('error while getting Movie', e)
            next(e)
        })
})

module.exports = router;