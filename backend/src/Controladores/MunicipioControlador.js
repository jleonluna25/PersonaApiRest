


const DocumentoCtrl = {};

const p = require('../Modelos/Municipio');

DocumentoCtrl.getMunicipios =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}


DocumentoCtrl.registrarMunicipio = async (req, res) => {
    const { Mu_Nombre, Mu_Departamento} = req.body;
    const ps = new p({
        Mu_Nombre:Mu_Nombre,
        Mu_Departamento:Mu_Departamento 
         
    });
    await ps.save();
    res.json({message: 'Municipio Registrado'})
}



DocumentoCtrl.geMunicipio = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarMunicipio = async (req, res) => {
    const { Mu_Nombre, Mu_Departamento } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Mu_Nombre,
            Mu_Departamento, 
                       
 }
 );
             
res.json({message: 'Municipio Actualizado'})
}


DocumentoCtrl.deleteMunicipio = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Municipio Eliminado'})
}

module.exports = DocumentoCtrl;

