const express = require('express')

const { config } = require('../config/index')
const db = require('./db')
const placesRoutes = require('./routes/places')

const app = express()

// ? Stablish database connection
db.connect()

// ? Middlewares
app.use(express.json())

app.get('/', (req, res, next) => {
  res.send('xd')
})

// ? Routes
placesRoutes(app)

app.listen(config.port, () => {
  console.log(`Listening on: http://localhost:${config.port}`)
})
