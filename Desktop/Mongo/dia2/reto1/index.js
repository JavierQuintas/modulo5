let mongoose = require("mongoose");

let User = require("./user");
let Credential = require("./credentials");
let Profile = require("./profile");

mongoose.connect('mongodb+srv://javierfernandez:contraseña@codenotch.0kwyl.mongodb.net/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User({
    login: "Javier",
    password: "contraseñaJavier"
});

userDocument.save(checkRespuesta);
function checkRespuesta(err,res){
    if (err)
        console.log("Error " + err);
    else{
        console.log("Documento guardado correctamente");
    }
}

let profileDocument = new Profile({
    name : "Javier",
    surname : "Fernandez",
    dateOfBirth : "2002-11-15",
    comments : "No comments",
    rol : "User",
});

profileDocument.save(checkRespuestaProfile);
function checkRespuestaProfile(err,res){
    if (err)
        console.log("Error "+ err);
    else{
        console.log("Documento guardado correctamente.");
        }
}

let credetialDocument = new Credential({
    addres: "C/ Plateros 1",
    phone: 685915048,
    email: "javierfernandezquintas9@gmail.com"
});

credetialDocument.save(chekRespuestaCredential);
function chekRespuestaCredential(err,res){
    if (err)
        console.log("Errro "+ err);
    else{
        console.log("Documento guardado correctamente");
        console.log(res);
    }
}