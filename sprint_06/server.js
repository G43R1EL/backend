const express = require('express')
const { Server: HTTPServer } = require('http')
const { Server: SocketServer } = require('socket.io')

const messages = []

const app = express()
const httpServer = new HTTPServer(app)
const socketServer = new SocketServer(httpServer)

app.use(express.static('public'))
app.use('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

socketServer.on('connection', (socket) => {
    console.log('a user connected')
    socket.emit('INIT', 'Bienvenido al servidor WebSocket')
    socket.on('POST_MESSAGE', (msg) => {
        messages.push(msg)
        socketServer.sockets.emit('NEW_MESSAGE', msg)
        console.log(msg)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

const PORT = process.env.PORT || 3000
httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})