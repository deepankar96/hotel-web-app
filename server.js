//Importing modules required for the node api
const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const app = express()
 
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//Establish the credentials of the database
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hotel-app',
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

//Recieve rooms from the database
rooms = []
app.get('/getRooms',(req,res)=>{
  var sql = 'SELECT * FROM `room-table`';
    mysqlConnection.query(sql, (err,rows) => {
    if(err) throw err;
    for(row of rows){
      const room ={
        id:row.id,
        image:row.image+".jpg",
        hotelName:row.hotelName,
        hotelLocation:row.hotelLocation,
        roomType:row.roomType,
        price:row.price
      }
    rooms.push(room);
    }
    // res.send(rooms)
  res.status(200).json({
    message:"successfull",
    post:rooms
  }
  );
  rooms = [];
  });
  }
);



  
//Hosting the application on the server
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}..`);
});