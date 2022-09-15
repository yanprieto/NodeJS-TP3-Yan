//RUTAS DE LOS PACIENTES

const router = require('express').Router()

const pacienteController = require('../controllers/paciente.controller')

router.post('/', pacienteController.crear)
router.get('/', pacienteController.listar)
router.get('/:idPaciente', pacienteController.listarinfo)

module.exports = router