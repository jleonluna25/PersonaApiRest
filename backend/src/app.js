
const express = require('express');
const cors = require('cors');
const app = express();

//settiings
app.set('port', process.env.PORT || 9000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/Persona', require('./Rutas/Cis'));
app.use('/api/Persona', require('./Rutas/Queer'));

module.exports = app;

