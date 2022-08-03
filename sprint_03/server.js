const express = require('express')
const app = express()
const port = 8080
let visitas = 0

const server = app.listen(port, () => {
    console.log(`Server is running on ${server.address().port}`)
})

server.on('error', (err) => {
    console.log(`Error: ${err.message}`)
})

app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html; charset=UTF8')
    res.send(`<h1 style="color:#2468dd;">Bienvenidos al servidor Express!</h1>`)
})

app.get('/visitas', (req, res) => {
    visitas++
    res.header('Content-Type', 'text/html; charset=UTF8')
    res.send(`<p>La cantidad de visitas es de: ${visitas}</p>`)
})

app.get('/fyh', (req, res) => {
    const date = new Date().toLocaleString()
    res.header('Content-Type', 'text/plain; charset=UTF8')
    res.send({fyh: date})
})

app.get('*', (req, res) => {
    res.status(404).send({
        message: 'Not found'
    })
    throw new Error('Not found')
})
