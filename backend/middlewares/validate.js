const jwt = require('jsonwebtoken')

const { SECRET } = process.env

const validate = (req, res, next) => {
  const token = req.headers.authorization

  if(token) {
    jwt.verify(
      token, 
      SECRET,
      (error) => {
        if(error) {
          res.status(401).json({
            success: false,
            error: error.message
          })
        } else {
          next()
        }
      }
    )
  } else {
    res.status(401).json({
      success: false,
      error: 'Missing credentials'
    })
  }
}

module. exports = validate