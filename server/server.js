// const mongoose = require("mongoose");
// const express = require("express");
// const app = express();
// require("dotenv").config();

// //db
// mongoose.connect(
//     process.env.DB_URL, 
//     {
//         useCreateIndex: true,
//         useFindAndModify: false,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     },
//     (err) => {
//         if(err) throw err;
//         console.log("DB Connected");

//         const PORT = 4000;
//         app.listen(PORT, () =>{
//             console.log("Server is active");
//         });
//     }
// );

//mw

//ROUTES


const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 4000

mongoose.connect(process.env.DB_URL)
    .then(()=>console.log(`Connected to MongoDB`))
    .catch((err) =>console.log(err))

app.listen(PORT, () => console.log(`Server is active on: ${PORT}`))