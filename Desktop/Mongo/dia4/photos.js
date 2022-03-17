const mongoose = require("mongoose");

const photosSchema = new mongoose.Schema({
    nombre:String,
    url:String,
    titulo:String,
    descripcion: String
});

module.exports = mongoose.model("Photo",photosSchema);