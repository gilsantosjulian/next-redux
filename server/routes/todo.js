const router = require('express').Router()
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
      .catch(error => res.status(500).json({ success: false, error: error }))
  })

  router.post('/my', (req, res) => {

  })

  router.post('/update', (req, res) => {

  })

  router.post('/delete', (req, res) => {

  })

  return router;
}

module.exports = routes