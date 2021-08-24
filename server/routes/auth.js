const router = require('express').Router()
const UserSchema = require('../model/schemas/user.js')

const createToken = (user) => {
  const payload = {
    subject: user.email,
    username: user.name,
  }

  const options = {
    expireIn: '1d'
  }

  const result = jwt.sign(
    payload,
    process.env.SECRET,
    options,
  )

  return result
}

const routes = () => {

  router.get('/', (req, res) => {
    res.end("It works great auth");
  })

  router.post('/register', async(req, res) => {
    try {
      let user = req.body
      const hash = bcrypt.hashSync(user.password, 10)
      user.password = hash

      const newUser = new UserSchema(user)

      newUser.save()
      .then(saved => {
        const token = createToken(user)

        console.log({saved});

        res.status(200).json({
          success: true,
          user: {
            name: saved.name,
            email: saved.email,
            age: saved.age,
            token,
          }
        })
      })
      .catch(error => {
        res.status(500).json({ success: false, error })  
      })
    } catch (error) {
      res.status(500).json({ success: false, error })
    }
  })

  router.post('/login', async (req, res) => {
    try {
      const user = req.body
      console.log({user})
      const existingUser = await UserSchema.findOne({ email: user.email })
      
      if(!existingUser) {
        res.status(400).send('User does not exist')
      }

      // 12345 &*#(@*IDIDUFI)
      const passwordsMatch = await bcrypt.compare(user.password, existingUser.password)
      if(!passwordsMatch){
        res.status(400).json({ success: false, error: "Bad credentials" })
      }

      const token = createToken(existingUser)

      res.status(200).json({
        success: true,
        user: {
          name: existingUser.name,
          email: existingUser.email,
          age: existingUser.age,
          token,
        }
      })
    } catch (error) {
      res.status(500).json({ success: false, error })
    }

  }) 

  return router;
}

module.exports = routes