const mongoose = require('mongoose') ;

const todoSchema = new mongoose.Schema({
    task : {
        type : String ,
        require : true
    }
    },{
        timestamps : true
    }) ;

const Todo = mongoose.model('Todo' , todoSchema ) ;

module.exports = Todo ;