const express = require('express') ;
const port = 8001 ;
const app = express() ;
const ejs = require('ejs') ;
const path = require('path') ;
const bodyParser = require('body-parser') ;
const mongoose = require('./config/mongoose') ;
const User = require('./models/user') ;
const db = require('./models/user') ;

const session = require('express-session' ) ;
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy' ) ;
const MongoStore = require('connect-mongo');

app.set('view engine' , 'ejs' ) ;
// app.set('views' , path.join(__dirname , 'views' ) )
app.set('views' , './views') ;
app.use( express.urlencoded()) ;
app.use( express.static("assets")) ;

app.use( session({
    name : 'codeial' ,
    secret : 'blahsomething' ,
    saveUninitialized : false  , 
    resave : false , 
    cookie : {
        maxAge : ( 1000 * 60 * 100 ) 
    },
    store : MongoStore.create(
        {
            mongoUrl:'mongodb://localhost/int222' ,
            mongooseConnection : db , 
            autoRemove : 'disabled' 
        } , function( err ){
            console.log( err || 'connect-mongo db setup ok') ;
        }
    )
    

})) ;

app.use( passport.initialize() ) ;
app.use( passport.session() ) ;
app.use( passport.setAuthenticatedUser ) ;

app.use('/' , require('./routes/index') ) ;


app.listen( port , function( err ){
    if( err ){ console.log('Error in starting server' ) ; return ; }
    console.log('Server started at ' , port ) ;
})
