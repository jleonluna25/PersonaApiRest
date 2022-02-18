
const { Router } = require('express');
const router = Router();
const { getPaises, registrarPais, getPais, actualizarPais, deletePais } = require('../Controladores/PaisControlador');
 

router.route('/')
    .get(getPaises)
    .post(registrarPais)

 router.route('/:id')   
   .get(getPais)
    .put(actualizarPais)
    .delete(deletePais)

    
module.exports = router;