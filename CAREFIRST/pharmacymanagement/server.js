const express = require('express');
const mongoose = require('mongoose');




//convert request to java script object
const bodyParser = require('body-parser'); 

const cors = require("cors");


const app=express();

//import node.js pacakage for providing a connect/Express middleware can used to enable Cors with options
app.use(cors());

//import routes
const Router = require('./routes/stockitems');
const empRoutes= require('./routes/supplier');


//app middleware
app.use(bodyParser.json());
app.use(empRoutes);



//routes middleware
app.use(Router);

app.use(express.json());

app.use(
  express.urlencoded({ extended: true })
);



const PORT=8000;
const DB_URL = 'mongodb+srv://pwn:12345@myfirstcluster.9gnms.mongodb.net/carefirst?retryWrites=true&w=majority';
mongoose.connect(DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>{
   console.log('DB connected');
})
.catch((err) => console.log('DB connection ERROR',err));



app.listen(PORT, ()=>{
    console.log(`App is running on http://localhost:${PORT}`);
});

