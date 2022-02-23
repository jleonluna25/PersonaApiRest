
const CisController = {};

const CisPerson = require('../Modelos/Cis');

CisController.FindPersons =  async (req, res) => {
    const FoundPersons = await CisPerson.find();    
    res.json(FoundPersons)
}

CisController.CreateCisPerson = async (req, res) => {
    const { NombrePersona, GeneroPersona, EtniaPersona, NacimientoPersona, IdPersona } = req.body;
    const person = new CisPerson({
        NombrePersona: NombrePersona,
        GeneroPersona: GeneroPersona,
        EtniaPersona: EtniaPersona,
        NacimientoPersona: NacimientoPersona,
        IdPersona: IdPersona
        
    });
    await person.save();
    res.json({message: 'A cis person has borned!'})
}

CisController.FindPerson = async (req, res) => {
    const FoundPerson = await CisPerson.findById(req.params.id)
    res.json(FoundPerson)
}

CisController.DeconstructPerson = async (req, res) => {
    const { NombrePersona, GeneroPersona, EtniaPersona, NacimientoPersona, IdPersona } = req.body;
    await CisPerson.findOneAndUpdate({IdPersona: req.params.id}, 
        {
            NombrePersona,
            GeneroPersona,
            EtniaPersona,
            NacimientoPersona,
            IdPersona                    
        }
    );
    res.json({message: 'person in deconstruction!'})
}

CisController.BuryPerson = async (req, res) => {
    await CisPerson.findByIdAndDelete(req.params.id);   
    res.json({message: 'person has colgado los guayos :/'})
}

module.exports = CisController;




