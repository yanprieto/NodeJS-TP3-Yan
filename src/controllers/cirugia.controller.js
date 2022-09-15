// CONTROLADOR DE CIRUGIAS

module.exports = {
    
    listar: async (req, res) => {
        try{
            console.log('Ejecutando listar')

            res.json({
                message: " Se listaran todos los cirugias"
            })
        } catch (err) {
            console.log(err)
        }
    },
    crear: async (req, res) => {
        try{
            console.log('Ejecutando crear')

            res.json({
                message: " Se creara un cirugia"
            })
        } catch (err) {
            console.log(err)
        }
    },

    listarinfo: async (req, res) => {
        try{
            console.log('Ejecutando listarinfo')

            res.json({
                message: " Se listan los datos de un cirugia"
            })
        } catch (err) {
            console.log(err)
        }
    },

    }