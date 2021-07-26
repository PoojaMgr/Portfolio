const mongoose = require("mongoose");

const resume = new mongoose.schema({
    file: String
})

module.exports = mongoose.model("ResumePdf", resume)