const { Router } = require('express')
const {router} = require("express/lib/application");
const routerProductos = new Router()

routerProductos.get('/', (req, res) => {
    res.send('Router OK')
})

module.exports = routerProductos