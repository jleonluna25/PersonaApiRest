const { Schema, model } = require('mongoose');

const CisSchema = new Schema(
    {
        NombrePersona: { type: String, require:true, },   
        GeneroPersona: { type: String, require:true },  
        EtniaPersona: { type: String, require:true }, 
        NacimientoPersona: { type: Date, require: true, default: Date.now },
        IdPersona: { type: ObjectId, require: true, unique: true },
    },
    {
        timestamps: true
    },
);

module.exports = model('Cis', CisSchema);

