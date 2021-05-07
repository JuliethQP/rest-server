const express = require('express')
var cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.usuariosPath = '/api/usuarios'
    this.middleware()
    //rutas de mi aplicacion
    this.routes()
  }

  middleware() {
    this.app.use(cors())
    //directorio publico
    this.app.use(express.static('public'))
    this.app.use(express.json())
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('servidor corriendo en ', this.port)
    })
  }
}

module.exports = Server