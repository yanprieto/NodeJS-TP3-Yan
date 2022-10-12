//RUTAS DE LOS MEDICOS

const router = require('express').Router()

const medicoController = require('../controllers/medico.controller')

router.get('/prueba', medicoController.prueba)
router.post('/', medicoController.crear)
router.get('/listar', medicoController.listar)
router.get('/:idMedico', medicoController.listarInfo)

module.exports = router