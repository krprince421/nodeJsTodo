const mongoose = require('mongoose') ;

mongoose.connect('mongodb://localhost/int222')

const db = mongoose.connection ;

db.on( 'err' , console.error.bind('Error in connecting to db')  ) ;
db.once('open' , function(){
    console.log('Successfully connected to db' ) ;
})
