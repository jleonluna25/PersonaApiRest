
const DocumentoCtrl = {};

const p = require('../Modelos/Departamento');

DocumentoCtrl.getDepartamentos =  async (req, res) => {
const ps = await p.find();    
res.json(ps)
}


DocumentoCtrl.registrarDepartamento = async (req, res) => {
    const { Dep_Nombre, Dep_Pais} = req.body;
    const ps = new p({
        Dep_Nombre:Dep_Nombre,
        Dep_Pais:Dep_Pais 
         
    });
    await ps.save();
    res.json({message: 'Departamento Registrado'})
}



DocumentoCtrl.getDepartamento = async (req, res) => {
    const per = await p.findById(req.params.id)
    res.json(per)
}


DocumentoCtrl.actualizarDepartamento = async (req, res) => {
    const { Dep_Nombre, Dep_Pais } = req.body;
        await p.findOneAndUpdate({_id:req.params.id}, {
            Dep_Nombre,
            Dep_Pais, 
                       
 }
 );
             
res.json({message: 'Departamento Actualizado'})
}


DocumentoCtrl.deleteDepartamento = async (req, res) => {
await p.findByIdAndDelete(req.params.id);   
res.json({message: 'Departamento Eliminado'})
}

module.exports = DocumentoCtrl;

