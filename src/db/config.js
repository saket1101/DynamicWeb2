const mongoose = require("mongoose")
const Detail = require("../models/User")
const Slider = require("../models/slider")
const Service = require("../models/service.js")
const Gallery = require("../models/gallery")
require('dotenv').config()

mongoose.connect(process.env.DB_LINK)
.then(()=>{
    console.log("db is connected successfully")
}).catch((error)=>{
    console.log(`db is not connected ${error}`)
})