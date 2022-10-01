const Todo = require('../models/todo') ;

module.exports.add = function( req , res ){
    
    Todo.create( req.body , function( err , todo ){
        if( err ){ console.log('Error in inserting data into db') ; return ; }
        console.log('Task Added Successfully') ;
    })

    
    return res.redirect('/') ;
}
module.exports.remove = function(req , res ){

}