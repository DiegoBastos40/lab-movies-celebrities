const mongoose = require('mongoose');

const Celebrity =require('../models/Celebrity.model');

const Movies = require('../models/Movies.model');

const celebrities = [
   {
     name: 'Brad Pitt',
     occupation: 'Actor',
     catchPhrase: 'Gorlomi'
   },
   {
     name: 'Angelina Jolie',
     occupation: 'Actress',
     catchPhrase: 'Hey there'
   },
   {
     name: 'Leonardo DiCaprio',
     occupation: 'Actor',
     catchPhrase: 'Hello I am Leo di Caprio'
   }
 ];
    
 Celebrity.create(celebrities)
   .then(dbCelebrities => {
     console.log(`Created ${dbCelebrities.length} celebrities`);
     mongoose.connection.close();
   })
   .catch(err => console.log(`An error occurred while creating celebrities in the DB: ${err}`));
    
    
      const movies = [
        {
          title: 'Glorious Bastards',
          genre: 'Action',
          plot: 'Bastards with no glory'
        },
        {
          title: 'Mr and Mrs Smith',
          genre: 'Action',
          plot: 'Failed matrimony'
        },
        {
          title: 'Titanic',
          genre: 'Romance',
          plot: 'Titanic movie clasic'
        }
      ];