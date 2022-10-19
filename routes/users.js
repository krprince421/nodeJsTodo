const express = require('express') ;
const passport = require('passport');
const usersController = require('../controllers/usersController' ) ;

const router = express.Router() ;
// Router for Signing In
router.get('/sign-in'  ,  usersController.signIn ) ;
// Router for Signing Out
router.get('/sign-out' , usersController.destroySession ) ;
// Router for Creating account of a new user
router.get('/sign-up'  , usersController.signUp ) ;
// Router for calling a profile
router.get('/profile' ,  passport.checkAuthentication , usersController.profile ) ;

router.post('/profile' , passport.checkAuthentication , usersController.profile ) ;
// Router for Creating a new User account
router.post('/create' , usersController.create ) ;
// Router for creating a session for existing user
router.post('/createSession' , passport.authenticate(
    'local' ,
    { failureRedirect : '/users/sign-in' })
      , usersController.createSession ) ;



module.exports = router ;
