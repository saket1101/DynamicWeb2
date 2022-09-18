const mongoose = require("mongoose")

const sliderSchema = mongoose.Schema({
    title:String,
    subtitle:String,
    imageUrl:String,
    class:String
})

const Slider = mongoose.model("Slider",sliderSchema)

module.exports = Slider