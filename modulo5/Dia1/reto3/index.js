require('./bbdd')

// Importar modelos
const User = require('./models/User');
const Profile = require('./models/Profile');
const Credential = require('./models/Credentials');

// Insertar un documento en cada colección para comprobar que funciona
// Model User
const userDocument = new User({
    login: "javierfernandez",
    password: "contraseña1"
});

userDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err)
})

// Model Profile
const profileDocument = new Profile({
    name: "javier",
    surname: "Fernandez",
    dateOfBirth: "2002-11-15",
    comments: "Sin Comentarios",
    rol: "User"
})

profileDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err)
});

// Model Credentials
const credentialDocument = new Credential({
    address: "C/ Plateros, 1",
    phone: 685915048,
    email: "javierfernandezquintas9@gmail.com"
})

credentialDocument.save()
.then((res) => {
    console.log('Documento guardado correctamente');
    console.log(res);
})
.catch((err) => {
    console.log(err)
})