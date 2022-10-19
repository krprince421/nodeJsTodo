const express = require('express') ;
const todoConstroller = require('../controllers/todoController') ;
const router = express.Router() ;

// Router for adding to do task
//Saving task in mongodb
router.post('/add' , todoConstroller.add ) ;
// Router for deleting task from mongodb
router.get('/delete/:id' , todoConstroller.delete ) ;


module.exports = router ;
