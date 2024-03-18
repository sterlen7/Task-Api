const express = require('express');
const allRoutes = express.Router();


const {newTask,taskDelete,alltasks} = require('../controller/allcontrollers')


allRoutes.get('/alltasks',alltasks)
allRoutes.post('/newtask',newTask)
allRoutes.delete('/taskDelete',taskDelete)






module.exports = allRoutes;