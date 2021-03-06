const router = require('express').Router()
const validate = require('../middlewares/validate')
const TodoSchema = require('../model/schemas/todo.js')

const routes = () => {

  router.get('/', (req, res) => {
    res.end("It works great todo");
  })

  router.post('/new', (req, res) => {
    const todo = req.body
    const newTodo = new TodoSchema(todo)

    newTodo.save()
      .then(saved => {
        res.status(201).json({
          success: true,
          todo: {
            _id: saved._id,
            title: saved.title,
            email: saved.email,
            done: saved.done,
          }
        })
      })
      .catch(
        error => res.status(500).json({ success: false, error: error })
      )
  })

  router.post('/my', (req, res) => {
    const info = req.body

    TodoSchema.find({ email: info.email })
      .then(todos => {
        res.status(200).json({
          success: true,
          todos: todos,
        })
      })
      .catch(
        error => res.status(500).json({ success: false, error: error })
      )
  })

  router.post('/update', async (req, res) => {
    const info = req.body
    try {
      const todo = await TodoSchema.updateOne({_id: info.id}, {
        $set: {
          title: info.title,
          done: info.done,
        }
      })

      if(todo) {
        const todos = await TodoSchema.find({ email: info.email })

        res.status(200).json({
          success: true,
          todos: todos,
        })
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error })
    }
  })

  router.post('/delete', validate, async (req, res) => {
    const info = req.body
    try {
      const todo = await TodoSchema.deleteOne({ _id: info.id })

      if(todo) {
        const todos = await TodoSchema.find({ email: info.email })
        res.status(200).json({
          success: true,
          todos: todos,
        })
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error })
    }
  })

  return router;
}

module.exports = routes