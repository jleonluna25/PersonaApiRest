
const QueerController = {};

const QueerPerson = require('../Modelos/Queer');

QueerController.FindPersons =  async (req, res) => {
    const FoundPersons = await QueerPerson.find();    
    res.json(FoundPersons);
}

QueerController.CreateQueerPerson = async (req, res) => {
    const { NombrePersona, GeneroPersona, EtniaPersona, NacimientoPersona, IdPersona } = req.body;
    const person = new QueerPerson({
        NombrePersona: NombrePersona,
        GeneroPersona: GeneroPersona,
        EtniaPersona: EtniaPersona,
        NacimientoPersona: NacimientoPersona,
        IdPersona: IdPersona
        
    });
    await person.save();
    res.json({message: 'A cis person has borned!'});
}

QueerController.FindPerson = async (req, res) => {
    const FoundPerson = await QueerPerson.findById(req.params.id)
    res.json(FoundPerson);
}

QueerController.DeconstructPerson = async (req, res) => {
    const { NombrePersona, GeneroPersona, EtniaPersona, NacimientoPersona, IdPersona } = req.body;
    await QueerPerson.findOneAndUpdate({IdPersona: req.params.id}, 
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


QueerController.BuryPerson = async (req, res) => {
    await QueerPerson.findByIdAndDelete(req.params.id);   
    res.json({message: 'person has colgado los guayos :/'})
}

module.exports = QueerController;
//export default QueerController;



