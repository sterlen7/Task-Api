const express = require('express');
const getAll = require('../controller/allcontrollers');
const addNew = require('../controller/allcontrollers');




const allRoutes = express.Router();


allRoutes.get('/all',getAll)// route for getting all tasks 
allRoutes.get('/new',addNew)







module.exports = allRoutes;