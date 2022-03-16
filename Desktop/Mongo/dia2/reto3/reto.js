let mongoose = require ("mongoose");
let User = require("./user");
let Photo = require("./photos");

mongoose.connect('mongodb+srv://javierfernandez:contraseña@codenotch.0kwyl.mongodb.net/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});

// function subirFoto(nombre,url,titulo,descripcion){

//     let foto ={
//         usuario : nombre,
//         url: url,
//         titulo: titulo,
//         descripcion: descripcion
//     };

//     Photo.create(foto)
//     .then((dato)=>{
//         console.log("Foto guardada con éxito");
//         console.log(dato);
//     })
//     .catch(()=>{
//         console.log("Ha habido un error al guardar la foto")
//     })

// }
// subirFoto("Mi foto2","./img/puente.jpg","puente talavera 2","Una foto de una pareja en el puente de Talavera 2");
// subirFoto("Mi foto","./img/puente.jpg","puente talavera","Una foto de una pareja en el puente de Talavera");



// function obtenerFoto(nombre){

//     Photo.find({usuario:nombre})
//     .then((datos)=>{
//         console.log(datos);
//     })
//     .catch(()=>{
//         console.log("Ninguna foto encontrada")
//     })
// }

// obtenerFoto("Mi foto");





// function eliminarFoto(nombre,titulo){
//     Photo.deleteOne({usuario:nombre,titulo:titulo})
//     .then((datos)=>{
//         console.log("Foto borrada correctamente")
//         console.log(datos);
//     })
//     .catch(()=>{
//         console.log("Foto no encontrada, no seha borrado");
//     })
// }

// eliminarFoto("Mi foto2","puente talavera 2");




// function eliminarTodasFoto(nombre){
//     Photo.deleteMany({usuario:nombre})
//     .then((datos)=>{
//         console.log("Foto borrada correctamente")
//         console.log(datos);
//     })
//     .catch(()=>{
//         console.log("Foto no encontrada, no seha borrado");
//     })
// }

// eliminarTodasFoto("Mi foto");