const express = require('express')
const dataBase = require('./db')()

const api = express()
api.use(express.json())

api.get('/tasks', (req, res) => {
  const command = `SELECT *
                   FROM lesson.tasks;`
  dataBase.connect(err => {
    if (!err) {
      dataBase.query(command, (err, result) => {
        if (!err) {
          res.json(result)
        } else {
          console.log(err)
          res.send('Error DATABASE WRITE')
        }
      })
    } else {
      res.send('Error DATABASE')
    }
  })
})

api.post('/tasks', (req, res) => {
  const {task, done} = req.body
  const command = `INSERT INTO lesson.tasks (task, done)
                     VALUES ('${task}', '${done}');`

  dataBase.connect(err => {
    if (!err) {
      dataBase.query(command, (err, result) => {
        if (!err) {
          res.json(result)
        } else {
          console.log(err)
          res.send('Error DATABASE WRITE')
        }
      })
    } else {
      res.send('Error DATABASE')
    }
  })
})

api.listen(3000, () => console.log('Server has started on port:3000'))