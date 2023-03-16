require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnect } = require('./database/config');

// Crear el servidor de express
const app  = express();
app.use(cors());
dbConnect();

// Rutas
app.get('/', (request, response) => {
    response.json({
        ok: true,
        mensaje: 'Hola!!!'
    })
});

//Levantar el servidor
app.listen(process.env.PORT, () => {
    console.log('Levantado el changarro en puerto 3000');
});