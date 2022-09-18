const express = require("express")
const async = require("hbs/lib/async")
const Detail = require("../models/User")
const Slider = require("../models/slider")
const Service = require("../models/service")
const Form = require("../models/form")
const Gallery = require("../models/gallery")
const routes = express.Router()

routes.get("/",async (req,res) =>{
    try{
        const details = await Detail.findOne({"_id":"632450a0f8a47f49442feb84"})
        const sliders = await Slider.find()
        const services = await Service.find()
        res.render("index",{details:details,sliders:sliders,services:services})
    }catch(err){
        console.log(err.message)
    }
  
})

routes.get("/gallery",async (req,res) =>{
    try{
        const details = await Detail.findOne({"_id":"632450a0f8a47f49442feb84"})
        const galleries = await Gallery.find()
        res.render("gallery",{details:details,galleries:galleries})
    }catch(err){
        console.log(err.message)
    }
})
routes.post("/contact-us",async (req,res)=>{
    try{
        const data = req.body
        const contacts =await Form.create(data)
        res.redirect("/")
    }catch(err){
        res.status(500).redirect("/")
    }

})
module.exports = routes