//Schema for storing all to do information
const mongoose = require('mongoose') ;

const todoSchema = new mongoose.Schema({
    task : {
        type : String ,
        require : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User'
    }
    },{
        timestamps : true
    }) ;

const Todo = mongoose.model('Todo' , todoSchema ) ;

module.exports = Todo ;