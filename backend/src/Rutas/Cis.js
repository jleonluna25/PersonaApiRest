
const { Router } = require('express');
const router = Router();
const { FindPersons, CreateCisPerson, FindPerson, DeconstructPerson, BuryPerson } = require('../Controladores/CisController');
 

router.route('/')
  .get(FindPersons)
  .post(CreateCisPerson)

router.route('/:id')   
  .get(FindPerson)
  .put(DeconstructPerson)
  .delete(BuryPerson)

    
module.exports = router;