const mongoose = require("mongoose")

const serviceSchema = mongoose.Schema({
    icon:String,
    text:String,
    description:String,
    linkText:String,
    link:String
})

const Service = mongoose.model("Service",serviceSchema)

module.exports = Service