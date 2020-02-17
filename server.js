//Importing modules required for the node api
const mysql = require('mysql');
const express = require('express')
const bodyparser = require('body-parser');
const app = express()
 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//Establish the credentials of the database
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '',
  multipleStatements: true
  });


 //Create a connection with the database 
  mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });

//Handling CROS
  app.use((req,res,next)=>{
    res.setHeader(
        "Access-Control-Allow-Origin","*"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
        "GET,POST,PATCH,DELETE,OPTIONS"
    );
    next();
  })



  
//Hosting the application on the server
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}..`);
})