const User = require('../models/user') ;
const Todo = require('../models/todo') ;
/*
module.exports.home = async function( req , res ){

    Todo.find({}).populate('user').exec( function( err , todos ){
        return res.render('home' ,{
            todos : todos
        })
    })

}
*/

module.exports.home = async function( req , res ){
    if( req.user ){
        console.log( "User id is " , req.user._id ) ;

        Todo.find({ user : req.user._id }).populate('user').exec( function( err , todos){
            return res.render('home' , {
                todos : todos
            })
        })
        return ;
    }
    
    //console.log( "id : ",  req.user._id ) ;
    Todo.find({}).populate('user').exec( function( err , todos){
        return res.render('home' , {
            todos : todos
        })
    })

}
