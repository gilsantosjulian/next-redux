const router = require('express').Router()

const routes = () => {
  router.get("/", (req, res) => {
    res.end("It works great auth");
  })

  return router;
}

module.exports = routes