const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors=require('cors')

const app = express();

//use express.json() to get data into json format
app.use(express.json());

//Port 
const PORT = process.env.PORT || 5500;

app.use(cors())

//import routes
const employeeRoute = require('./routes/empListRoutes');

//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.use('/', employeeRoute);

//connect to server
app.listen(PORT, ()=> console.log("Server connected") );