// Schema for storing all the user information
const mongoose = require('mongoose') ;
const userSchema = {
    email : {
        type : String ,
        require : true ,
        unique : true
    },
    password : {
        type  :String ,
        require : true
    } ,
    name : {
        type : String , 
        require : true
    }

}
const User = mongoose.model('User' , userSchema ) ;

module.exports = User ;
