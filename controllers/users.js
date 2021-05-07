const { respose, request } = require('express')

const usuariosGet = (req, res = respose) => {
  res.json({
    msg: "get api"
  })
}

const usuariosPut = (req = request, res = respose) => {
  const id = req.params.id
  const { page } = req.query

  res.status(200).json({
    msg: "put",
    id: id,
    page: page
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