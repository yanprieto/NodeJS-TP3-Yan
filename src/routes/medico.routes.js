//RUTAS DE LOS MEDICOS

const router = require('express').Router()

const medicoController = require('../controllers/medico.controller')

router.post('/', medicoController.crear)
router.get('/', medicoController.listar)
router.get('/:idMedico', medicoController.listarinfo)

module.exports = router