const Todo = require('../models/todo') ;

module.exports.add = function( req , res ){
    
    Todo.create( req.body , function( err , todo ){
        if( err ){ console.log('Error in inserting data into db') ; return ; }
        console.log('Task Added Successfully') ;
    })

    
    return res.redirect('/') ;
}
module.exports.delete = async function(req , res ){

    console.log( req.params.id )

    let todo = await Todo.findById( req.params.id ) ;
    
    if( todo )todo.remove()
    else { console.log('Todo not found') ; }

    res.redirect('back') ;
}