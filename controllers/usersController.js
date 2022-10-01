const User = require('../models/user') ;
const Todo = require('../models/todo') ;
module.exports.profile = function( req , res ){
    
    
    return res.render('profile') ;
    
   
}

module.exports.createSession = function( req , res ){
    
    User.findOne({ email : req.body.email } , function( err , user ){
        if( err ){ console.log('Error ' , err ) ; return ; }
        if( user && req.body.password == user.password ){
            return res.render('home', {
                todo : Todo
            }) ;
        }
        return res.redirect('back') ;
    }) 
}

module.exports.create = function( req , res ){
    
    if( req.body.password != req.body.cPassword ){ return res.redirect('back') ; }
    
        //if( req.body.password != req.body.co-password ){ return res.redirect('back') ; }
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

module.exports.signIn = function( req , res ){
    

    if( req.isAuthenticated() ){
        return res.redirect('/') ;
    }
    return res.render('sign_in') ;

}

module.exports.signUp = function( req , res ){

    if( req.isAuthenticated() ){
        return res.redirect('/') ;
    }
    return res.render('sign_up') ;
}
module.exports.destroySession = async function( req , res ){
    
    req.logout(function( err ){
        if( err )return ;
        res.redirect('/') ;
    })

}
