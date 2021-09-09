const express = require('express')
const next = require('next')
const cors = require('cors');
const connect = require("./model/connect")
const bodyParser = require('body-parser').json()
require('dotenv').config()

const { NODE_ENV, PORT } = process.env

const server = express()
// const handle = server.getRequestHandler(); TODO
const routes = require('./routes/index.js')
const authRouter = require('./routes/auth.js')
const todoRouter = require('./routes/todo.js')

server.use(cors())
server.use('/api', routes(server))
server.use('/api/auth', bodyParser, authRouter(server))
server.use('/api/todo', bodyParser, todoRouter(server))

server.get('*', (req, res) => {
  return handle(req, res); // TODO: improve handle case
})

connect()

server.listen(PORT, err => {
  if (err) throw err;
  console.log((`>_ Ready on ${PORT}`));
})
