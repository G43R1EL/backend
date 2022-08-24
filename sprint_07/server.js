const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const routerProductos = require('./routes/routerProductos')
const { Server: HTTPServer } = require('http')
const { Server: SocketIOServer } = require('socket.io')
const http = new HTTPServer(app)
const ioServer = new SocketIOServer(http)
const handlebars = require('handlebars')
const Container = require('./controllers/container')
const PORT = process.env.PORT || 8080


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/api/productos', routerProductos)
const server = http.listen(PORT, () => {
    console.log(`Server is running on ${server.address().port}`)
})

server.on('error', (err) => {
    console.log(`Error: ${err.message}`)
})