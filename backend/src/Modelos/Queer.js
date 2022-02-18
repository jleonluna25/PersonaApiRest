const { Schema, model } = require('mongoose');

const QueerSchema = new Schema(
    {
        NombrePersona: { type: String, require:true, },   
        GeneroPersona: { type: String },  
        EtniaPersona: { type: String, require:true }, 
        NacimientoPersona: { type: Date, require: true, default: Date.now },
        IdPersona: { type: ObjectId, require: true, unique: true },
    },
    {
        timestamps: true
    },
);

module.exports = model('Queer', QueerSchema);

