const express = require('express')
const next = require('next')
// const cors = require('cors');
// const { connect } = require('react-redux');
require('dotenv').config()

console.log(process.env);

const {
  NODE_ENV,
  PORT,
} = process.env

const app = next({
  dev: NODE_ENV !== 'production'
})

app
  .prepare()
  .then(() => {
    const server = express()
    const routes = require('./routes/index.js')

    server.use('/api', routes(server))

    server.listen(PORT, err => {
      if(err) throw err;
      console.log((`>_ Ready on ${PORT}`));
    })
  })
  .catch(error => {
    console.log(error);
    process.exit(1)
  })