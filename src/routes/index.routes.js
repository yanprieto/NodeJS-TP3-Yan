// SE ENCARGA DE CONECTAR TODAS LAS RUTAS
const { Router } = require ('express') // importar express

const medicoRoutes = require("./medico.routes")         //importa el archivo de rutas del medico
const pacienteRoutes = require("./paciente.routes")     //importa el archivo de rutas del paciente
const cirugiaRoutes = require("./cirugia.routes")       //importa el archivo de rutas de la cirugia

const rutas_init = () => {  //aca se ponentodas las rutas que existen
    const router = Router() //crear una instancia de express.Router()

    router.use("/medico", medicoRoutes)        //para acceder a las rutas de medicosde la api siempre deberá en...
    router.use("/paciente", pacienteRoutes)
    router.use("/cirugia", cirugiaRoutes)

    return router
}

module.exports = { rutas_init } // exportar el archivo de rutas de la api