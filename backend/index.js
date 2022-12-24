const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const upload = require("./routes/uploadRoute")

const app = express();

app.use(express.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({extended:false})); //  To get data in json form of data
app.use(bodyParser.json())

app.use(cors()); // TO RUN TO FROM 1 SERVER TO ANOTHER

app.use("/",upload)

app.listen(8340,()=>{
    console.log("connected to 8340")
})