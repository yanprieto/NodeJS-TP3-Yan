// SE ENCARGA DE CONECTAR TODAS LAS RUTAS
const { Router } = require ('express')

const medicoRoutes = require("./medico.routes")
const pacienteRoutes = require("./paciente.routes")
const cirugiaRoutes = require("./cirugia.routes")

const rutas_init = () => {
    const router = Router()

    router.use("/medicos", medicoRoutes)
    router.use("/pacientes", pacienteRoutes)
    router.use("/cirugias", cirugiaRoutes)

    return router
}

module.exports = { rutas_init }