const express = require('express') ;
const passport = require('passport');
const usersController = require('../controllers/usersController' ) ;

const router = express.Router() ;

router.get('/sign-in'  ,  usersController.signIn ) ;

router.get('/sign-out' , usersController.destroySession ) ;

router.get('/sign-up'  , usersController.signUp ) ;

router.get('/profile' ,  passport.checkAuthentication , usersController.profile ) ;

router.post('/profile' , passport.checkAuthentication , usersController.profile ) ;

router.post('/create' , usersController.create ) ;

router.post('/createSession' , passport.authenticate(
    'local' ,
    { failureRedirect : '/users/sign-in' })
      , usersController.createSession ) ;


module.exports = router ;
