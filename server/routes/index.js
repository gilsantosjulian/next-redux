const express = require("express")
const router = express.Router()

const routes = () => {
  router.get("/test", (req, res) => {
    res.end("It works great");
  })

  return router;
}

module.exports = routes