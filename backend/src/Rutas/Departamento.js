

const { Router } = require('express');
const router = Router();
const { getDepartamentos, registrarDepartamento, getDepartamento, actualizarDepartamento, deleteDepartamento } = require('../Controladores/DepartamentoControlador');
 

router.route('/')
    .get(getDepartamentos)
    .post(registrarDepartamento)

 router.route('/:id')   
   .get(getDepartamento)
    .put(actualizarDepartamento)
    .delete(deleteDepartamento)

    
module.exports = router;