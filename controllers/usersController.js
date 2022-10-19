const User = require('../models/user') ;
const Todo = require('../models/todo') ;
// Module to call profile page
module.exports.profile = function( req , res ){ 
    return res.render('profile') ;
}
// Module to sign in an existing user
module.exports.createSession = async function( req , res ){
    
    User.findOne({ email : req.body.email } , function( err , user ){
        if( err ){ console.log('Error ' , err ) ; return ; }
        if( user && req.body.password == user.password ){
            return res.redirect('/') ;
        }
        return res.redirect('back') ;
    }) 
}
// Module to create a new account for a new user
module.exports.create = function( req , res ){
    
    if( req.body.password != req.body.cPassword ){
        console.log('Password and Confirm password did not matched') ;
         return res.redirect('back') ; 
        }
    
        
        User.findOne({ email: req.body.email } , async function( err , user ){

            let signIn = res.redirect('/users/sign-in') ;

            if( err ){ console.log('Error in finding user' ) ; return ; }

            if( user ){ return signIn ; }

            User.create( req.body , function( err , user ){
                if( err ){ console.log('Error ' , err ) ; return ; }
                console.log('Account Created ! ' ) ;
                return signIn ;
                
            }) ;
        })
}
// Module to call sign_in page
module.exports.signIn = function( req , res ){
    
    if( req.isAuthenticated() ){
        return res.redirect('/') ;
    }
    return res.render('sign_in') ;
}
// Module to call sign_up page
module.exports.signUp = function( req , res ){

    if( req.isAuthenticated() ){
        return res.redirect('/') ;
    }
    return res.render('sign_up') ;
}
// Module to log out a user
module.exports.destroySession = async function( req , res ){
    
    req.logout(function( err ){
        if( err )return ;
        res.redirect('/') ;
    })

}
