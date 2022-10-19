const User = require('../models/user') ;
const Todo = require('../models/todo') ;

// module for calling a home function
module.exports.home = async function( req , res ){
    if( req.user ){
        // If the user is signed in display all the task that a particular user has added in mongodb

        Todo.find({ user : req.user._id }).populate('user').exec( function( err , todos){
            return res.render('home' , {
                todos : todos
            })
        })

    }
    else{
        // If the user is not singed in not task is available so just call the home function
        res.render('home') ;
    }
    
    
}
