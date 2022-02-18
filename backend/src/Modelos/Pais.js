
const { Schema, model } = require('mongoose');

const carvajaSchema = new Schema({
    
    Pais_Nombre: {
        type: String,
        require:true,
        unique: true
    },   

    Pais_Poblacion: {
        type: Number,
        require:true
    },  

    clima_pais: {
        type: String,
        require:true
    }, 

   

},


{
timestamps: true
},

);

module.exports = model('Paises', carvajaSchema);

