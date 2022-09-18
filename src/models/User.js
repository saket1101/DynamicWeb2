const mongoose = require("mongoose")
const config = require("../db/config")

const detailSchema = mongoose.Schema({
    brandName: String,
    links: [
        {
            label: String,
            url: String
        },
    ],
});
const Detail = mongoose.model("Detail",detailSchema)

module.exports = Detail