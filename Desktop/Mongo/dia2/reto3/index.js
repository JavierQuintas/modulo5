let mongoose = require ("mongoose");
let User = require("./user");
let Photo = require("./photos");

mongoose.connect('mongodb+srv://javierfernandez:contraseña@codenotch.0kwyl.mongodb.net/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User({
    login: "Javier",
    password: "contraseñaJavier",
    name: "Javier",
    surname: "Fernandez Quintas",
    addres: "C/ Plateros 1",
    dateOfBirth: "2002-11-15",
    comments: "No comments",
    rol: "Admin",
    phone: 685915048,
    email: "javierfernandezquintas9@gmail.com",
    follow: "62313b942cc43fd237a24d2e"
});

userDocument.save(checkRespuesta);
function checkRespuesta(err,res){
    if(err)
        console.log("Error" + err);
    else
        console.log("Documento Guardado Correctamente.");
}

let photoDocument = new Photo({
    nombre: "Mi foto",
    url:"./img/puente",
    titulo: "Puente Talavera",
    descripcion: "Una foto de una pareja en el puente de Talavera"
});

photoDocument.save(checkPhotoRespuesta);
function checkPhotoRespuesta(err,res){
    if(err)
        console.log("Error"+ err);
    else
        console.log("Documento Guardado Correctamente");
}