//RUTAS DE LOS CIRUGIAS

const router = require('express').Router()

const cirugiaController = require('../controllers/cirugia.controller')

router.post('/prueba', cirugiaController.prueba)
router.post('/', cirugiaController.crear)
router.get('/listar', cirugiaController.listar)
router.get('/:idCirugia', cirugiaController.listarInfo)

module.exports = router