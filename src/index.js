const express = require('express')

const globalConstants = require('./const/globalConstants')
const routerConfig = require('./routes/index.routes')

const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init())
}

const init = () => {
    const app = express()  //crea una instancia de express}

    configuracionApi(app)  //configura api

    configuracionRouter(app)  //configura las rutas

    app.listen(globalConstants.PORT)
    console.log('La aplicacion esta ejecutando se en el puerto: ' + globalConstants.PORT)
}

init();