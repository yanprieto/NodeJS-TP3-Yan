//RUTAS DE LOS PACIENTES

const router = require('express').Router()

const pacienteController = require('../controllers/paciente.controller')

router.get('/prueba', pacienteController.prueba)
router.post('/', pacienteController.crear)
router.get('/', pacienteController.listar)
router.get('/:idPaciente', pacienteController.listarInfo)

module.exports = router