const express = require('express') ;

const router = express.Router() ;
const homeController = require('../controllers/homeController') ;


router.get('/' , homeController.home ) ;

router.use('/users' , require('./users') ) ;
router.use('/todo' , require('./todo') ) ;

module.exports = router ;
