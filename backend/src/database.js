
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/persona';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false

});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conectado A Persona DB');
});

