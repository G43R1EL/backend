const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.headers['user-agent'])
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF8' })
    res.end(saludo())
})

const connectedServer = server.listen(8080, ()=>{
    console.log(`Server is running on ${connectedServer.address().port}`)
})

const saludo = () => {
    const date = new Date()
    const hour = date.getHours()
    switch (true) {
        case (hour <= 5):
            return 'Buenas noches!'
        case (hour >= 6 && hour <= 12):
            return 'Buenos días!'
        case (hour >= 13 && hour <= 19):
            return 'Buenas tardes!'
        case (hour >= 20 && hour <= 23):
            return 'Buenas noches!'
        default:
            return 'Hola!'
    }
}