const express = require('express');
const {getAll,addNew, getOneTask,deleteTask} = require('../controller/allcontrollers');
const allRoutes = express.Router();


allRoutes.get('/all',getAll)// route for getting all tasks 
allRoutes.post('/new',addNew)//route for adding new task
allRoutes.get('/task/id:',getOneTask)//route to get one task
allRoutes.delete('/delete/id:',deleteTask) //route to delete task



module.exports = allRoutes;