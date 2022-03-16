let mongoose = require ("mongoose");
let User = require("./user");
let Photo = require("./photos");

mongoose.connect('mongodb+srv://javierfernandez:contraseña@codenotch.0kwyl.mongodb.net/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

let userDocument = new User({
    login: "Pablo",
    password: "contraseñaPablo",
    name: "Pablo",
    surname: "Garrido",
    addres: "C/ Damasquinadores 13",
    dateOfBirth: "2000-01-09",
    comments: "No comments",
    rol: "User",
    phone: 634795283,
    email: "Pablogarrido9@gmail.com",
    follow: "62313fd7d97457eec7943692"
});

userDocument.save(checkRespuesta);
function checkRespuesta(err,res){
    if(err)
        console.log("Error" + err);
    else
        console.log("Documento Guardado Correctamente.");
}

// let photoDocument = new Photo({
//     nombre: "Mi foto",
//     url:".img/puente.jpg",
//     titulo: "Puente Talavera",
//     descripcion: "Una foto de una pareja en el puente de Talavera"
// });

// photoDocument.save(checkPhotoRespuesta);
// function checkPhotoRespuesta(err,res){
//     if(err)
//         console.log("Error"+ err);
//     else
//         console.log("Documento Guardado Correctamente");
// }