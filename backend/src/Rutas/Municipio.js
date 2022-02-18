

const { Router } = require('express');
const router = Router();
const { getMunicipios, registrarMunicipio, geMunicipio, actualizarMunicipio, deleteMunicipio } = require('../Controladores/MunicipioControlador');
 

router.route('/')
    .get(getMunicipios)
    .post(registrarMunicipio)

 router.route('/:id')   
   .get(geMunicipio)
    .put(actualizarMunicipio)
    .delete(deleteMunicipio)

    
module.exports = router;