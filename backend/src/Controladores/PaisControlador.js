
const DocumentoCtrl = {};

const p = require('../Modelos/Pais');

DocumentoCtrl.getPaises =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}




DocumentoCtrl.registrarPais = async (req, res) => {
    const { Pais_Nombre, Pais_Poblacion, clima_pais } = req.body;
    const ps = new p({
        Pais_Nombre:Pais_Nombre,
        Pais_Poblacion:Pais_Poblacion,
        clima_pais: clima_pais
        
    });
    await ps.save();
    res.json({message: 'Pais Registradooo'})
}



DocumentoCtrl.getPais = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarPais = async (req, res) => {
    const { Pais_Nombre, Pais_Poblacion, clima_pais } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Pais_Nombre,
            Pais_Poblacion,
            clima_pais, 
                       
 }
 );
             
res.json({message: 'Pais Actualizado'})
}


DocumentoCtrl.deletePais = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Pais Eliminado'})
}

module.exports = DocumentoCtrl;




