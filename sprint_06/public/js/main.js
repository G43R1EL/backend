const socket = io()
socket.on('connect', () => {
    console.log('connected to server')
})

socket.on('INIT', (msg) => {
    console.log(msg)
})

function sendMessage() {
    const name = document.getElementById('name').value
    const message = document.getElementById('message').value
    socket.emit('POST_MESSAGE', {name, message})
}