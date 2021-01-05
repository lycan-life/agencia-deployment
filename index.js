// importamos express
//const express = require('express'); //require es sintaxis de comon js
// version con imports
import express from 'express';
// contiene una funcion para ejecutar express
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config( { path : './variables.env' } );
const app = express();
// conectar base de datos
db.authenticate()
    .then(()=>{
        console.log('Base de datos conectada');
    })
    .catch((error)=>{
        console.log(error);
    })
// define el puerto
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4000;
// abilitar pug
app.set('view engine', 'pug');
//fecha actual creando tu propio middleware
app.use((req,res,next)=>{
    const fecha = new Date();

    res.locals.Actual = fecha.getFullYear(); // crea una variable para todos los archivos y se pueda usar
    return next(); //pasa al siguiente middleware 

})
// Agregar el body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));
// abilitar la carpeta publica
app.use(express.static('public'));

// arrrancas con el puerto que deseas
app.use('/',router); // use soporta gwt,put,delete etc
app.listen(port, host, ()=>{
    console.log(`El servidor sirve en el puerto ${port}`);
})
