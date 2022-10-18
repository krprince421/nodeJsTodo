const User = require('../models/user') ;
const Todo = require('../models/todo') ;

module.exports.home = async function( req , res ){

    Todo.find({}).populate('user').exec( function( err , todos ){
        return res.render('home' ,{
            todos : todos
        })
    })

}