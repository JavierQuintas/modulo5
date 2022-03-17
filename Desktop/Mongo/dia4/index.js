let mongoose = require ("mongoose");
let User = require("./user");
let Photo = require("./photos");


const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

mongoose.connect('mongodb+srv://javierfernandez:contraseña@codenotch.0kwyl.mongodb.net/codenotch',{useNewUrlParser: false, useUnifiedTopology: false});


app.get("/photos",function(request,response){
    if(request.query.nombre!=null){
        Photo.find({usuario:request.query.nombre})
        .then((datos)=>{
            console.log(datos);
            response.send(datos)
        })
        .catch((err)=>{
            response.send("Ninguna foto encontrada")
        })
    }else{
        response.send("Usuario no encontrado");
    }
})

app.post("/photos",function(request,response){
    let foto = {
        usuario: request.body.usuario,
        titulo: request.body.titulo,
        url: request.body.url,
        descripcion: request.body.descripcion
    }

    Photo.create(foto)
    .then((dato)=>{
        console.log("Foto guardada con éxito");
        response.send(dato);
    })
    .catch((err)=>{
        response.send("Ha habido un error al guardar la foto")
    })
})


app.delete("/photos",function(request,response){
    if(request.body.usuario!=null && request.body.titulo!=null){
        Photo.deleteOne({usuario:request.body.usuario,titulo:request.body.titulo})
        .then((datos)=>{
            console.log("Foto borrada correctamente")
            response.send(datos);
        })
        .catch((err)=>{
            response.send("Foto no encontrada, no se ha borrado");
        })
    }else if(request.body.usuario!=null){
        Photo.deleteMany({usuario:request.body.usuario})
        .then((datos)=>{
            console.log("Fotos borradas correctamente")
            response.send(datos);
        })
        .catch(()=>{
            response.send("Fotos no encontrada, no se ha borrado");
        })
    }else{
        response.send("Foto no encontrado");
    }
    
})

app.get("/timeline",function(request,response){
    let texto=``;
    if(request.query.id != null){
        User.findOne({_id:request.query.id}).populate([{path:"follow",populate:{path:"foto"}},"foto"]).exec((err,res)=>{
            if(err){
                response.send(err)
            }else{
                response.send(res);
            } 
        })
    }else{
        response.send("Usuario no encontrado")
    }
    
})


app.listen(3000);