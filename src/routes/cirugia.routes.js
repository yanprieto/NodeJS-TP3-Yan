//RUTAS DE LOS CIRUGIAS

const router = require('express').Router()

const cirugiaController = require('../controllers/cirugia.controller')

router.post('/', cirugiaController.crear)
router.get('/', cirugiaController.listar)
router.get('/:idCirugia', cirugiaController.listarinfo)

module.exports = router