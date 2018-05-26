//====LIST DEPENDENCIES===//

const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
// const Cafeteria = require('./models/cafeteria.js')
const app = express();
const url = 'mongodb://localhost:27017/cafeteria';

//=========================//

let Schema = mongoose.Schema;

const cafeteriaSchema = new Schema({
  schedule: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  message: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})

const Cafeteria = mongoose.model('Cafeteria', cafeteriaSchema);

module.exports = Cafeteria;

//====ROOT DIRECTORY===//

app.get('/', function(req, res) {
    res.json('you a bitch');
  });
  
  //==========================//
  
  //====GET ALL SIGNATURES===//
  
  app.get('/api/cafeteria', function(req, res) {
    Cafeteria.find({}).then(eachOne => {
      res.json(eachOne);
      })
    })
  
  //==========================//
  
  //====POST NEW SIGNATURE===//
  
  app.post('/api/cafeteria', function(req, res) {
    Cafeteria.create({
      menu: req.body.MenuItem
    }).then(cafeteria => {
      res.json(cafeteria)
    });
  });
  
  //==========================//

  //====MONGOOSE CONNECT===//

mongoose.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
    }
   });
   
   //==========================//

   const server = app.listen(3000);