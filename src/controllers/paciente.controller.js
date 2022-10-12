// CONTROLADOR DE PACIENTES

const models = require('../database/models/index')

module.exports = {
    
    listar: async (req, res) => {
        try {
            const pacientes = await models.paciente.findAll()

            res.json({
                success: true,
                data: {
                    pacientes: pacientes
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    listarInfo: async (req, res, next) => {
        try {
            const paciente = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                }
               
            })

            res.json({
                success: true,
                data: {
                    paciente: paciente
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    crear: async (req, res, next) => {
        try {
            const paciente = await models.paciente.create(req.body)

            const relacion = await models.paciente_medico.create({
                pacienteId: paciente.id,
                pacienteId: req.body.pacienteId
            })

            res.json({
                success: true,
                data: {
                    id: paciente.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },

    prueba: async (req, res) => {
        try {
            console.log("Esta es una prueba...")
            
            res.json({
                message: "Prueba de Pacientes....."
            })                        

        } catch (err) {
            return next(err)
        }
    },


    }