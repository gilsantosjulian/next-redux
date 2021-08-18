const express = require('express')
const next = require('next')
const cors = require('cors');
const { connect } = require('react-redux');
const bodyParser = require('body-parser').json()
require('dotenv').config()

const { NODE_ENV, PORT } = process.env
const app = next({ dev: NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express()
    const routes = require('./routes/index.js')
    const authRouter = require('./routes/auth.js')

    server.use(cors())
    server.use('/api', routes(server))
    server.use('/api/auth', bodyParser, authRouter(server))

    server.get('*', (req, res) => {
      return handle(req, res);
    })

    connect()

    server.listen(PORT, err => {
      if(err) throw err;
      console.log((`>_ Ready on ${PORT}`));
    })
  })
  .catch(error => {
    console.log(error);
    process.exit(1)
  })