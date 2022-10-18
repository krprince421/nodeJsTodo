const express = require('express') ;
const todoConstroller = require('../controllers/todoController') ;
const router = express.Router() ;

router.post('/add' , todoConstroller.add ) ;

router.get('/delete/:id' , todoConstroller.delete ) ;


module.exports = router ;
