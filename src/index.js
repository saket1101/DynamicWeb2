const exp = require("constants")
const express = require("express")
const hbs = require("hbs")
const routes = require("./router/mainRoutes")
const config = require("../src/db/config")
require('dotenv').config()
const port = process.env.PORT || 4500

const app = express()

app.use("/static",express.static("Public"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("",routes)

app.set("view engine", "hbs")
app.set ("views","views")
hbs.registerPartials("views/partials")


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})