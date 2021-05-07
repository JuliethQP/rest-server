const { respose } = require('express')

const usuariosGet = (req, res = respose) => {
  res.json({
    msg: "get api"
  })
}

const usuariosPut = (req, res = respose) => {
  const id = req.params.id
  console.log(6)
  res.status(403).json({
    msg: "put",
    id: id
  })
}

const usuariosPost = (req, res = respose) => {
  const body = req.body
  res.status(403).json({
    msg: "post ",
    body: body
  })
}

const usuariosDelete = (req, res = respose) => {
  res.status(403).json({
    msg: "delete "
  })
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete
}