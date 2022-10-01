const express = require('express') ;

const router = express.Router() ;

router.get('/' , function( req , res ){
    return res.render('home') ;
})

router.use('/users' , require('./users') ) ;
router.use('/todo' , require('./todo') ) ;

module.exports = router ;
