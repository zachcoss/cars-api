const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const http = require('http')
const app = express()
const port = process.env.PORT

app.set('port', port)

app.use(helmet())
app.use(logger('common'))
app.use(express.json())

const router = require('./src/router')
app.use('/', router())

const server = http.createServer(app)

server.on('error', function(error) {
    throw new Error('Server error', error)
})
server.on('listening', function() {
    console.log(`Cars API - listening on port ${port}`)
})

server.listen(port)

module.exports = server