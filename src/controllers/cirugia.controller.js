// CONTROLADOR DE CIRUGIAS

const models = require('../database/models/index')

module.exports = {
    
    prueba: async (req, res) => {
        try{
            console.log('Ejecutando prueba')

            res.json({
                message: " Genera una prueba en cirugia"
            })
        } catch (err) {
            console.log(err)
        }
    },

    listar: async (req, res) => {
        try{
        
            const cirugias = await models.cirugia.findAll()

            res.json({
                success: true,
                data: {
                    cirugias: cirugias
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
    
    crear: async (req, res) => {
        try{
            console.log('Ejecutando crear')

            res.json({
                message: " Se creara una cirugia"
            })
        } catch (err) {
            console.log(err)
        }
    },

    listarInfo: async (req, res) => {
        try{
            console.log('Ejecutando listarinfo')

            res.json({
                message: " Se listan los datos de una cirugia"
            })
        } catch (err) {
            console.log(err)
        }
    },

    }