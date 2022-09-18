const mongoose = require("mongoose")

const gallerySchema = mongoose.Schema({
    imageUrl:String
})

const Gallery = mongoose.model("Galllery",gallerySchema)

module.exports = Gallery