const router = require('express').Router()
const UserSchema = require('../model/schemas/user.js')

const routes = () => {

  router.get('/', (req, res) => {
    res.end("It works great auth");
  })

  router.post('/login', async (req, res) => {
    try {
      const user = req.body
      console.log({user})
      const existingUser = await UserSchema.findOne({ email: user.email })
      
      if(!existingUser) {
        res.status(400).send('User does not exist')
      }

      res.status(200).json({
        success: true,
        user: {
          name: existingUser.name,
          email: existingUser.email,
          age: existingUser.age,
        }
      })
    } catch (error) {
      res.status(500).json({ success: false, error })
    }

  }) 

  return router;
}

module.exports = routes