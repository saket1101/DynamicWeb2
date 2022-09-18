const mongoose = require("mongoose")

const formSchema = mongoose.Schema({
email:{
    type:String,
    required:true
},
contact:{
    type:String,
    required:true

},
query:{
    type:String
}
})

const Form = mongoose.model("Form",formSchema)

module.exports = Form