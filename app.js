const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//Middlewares
app.use('/', () => {
    console.log('estamos en casa')
});
app.use('/posts', () => {
    console.log('abre una caja de curdas perro')
});

//Importar Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('estamos en casa')
    
});

//Conectar con DB
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser: true},
 () => {
    console.log('conectado a la base de datos')
});


//Como comenzar a escuchar el puerto del servidor
app.listen(3000);