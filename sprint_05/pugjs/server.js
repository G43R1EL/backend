// Imports and constants
const express = require('express')
const pug = require('pug')
const { Router } = express
const app = express()

const Container = require('./container')
const container = new Container('productos.json')

const routerProductos = Router()

// Server configuration
const port = 8080

// Router config
app.use('/api/productos', routerProductos)
routerProductos.use(express.json())
routerProductos.use(express.urlencoded({ extended: true }))

// PUG configuration
app.set('view engine', 'pug')
app.set('views', 'views')

// Endpoints
app.get('/', (req, res) => {
    res.render('form')
})

routerProductos.get('/', (req, res) => {
    
    container.getAll()
        .then(products => { 
            res.render('products', { products })
        })
        .catch(error => { res.status(500).json(error) })
})

routerProductos.post('/', (req, res) => {
    let product = req.body
    if (!product.title || !product.price || !product.thumbnail) {
        res.status(400).json({ error: 'title, price and thumbnail are required' })
    } else {
        product.price = parseFloat(product.price)
        container.save(req.body)
            .then(data => {
                container.getById(data)
                    .then(prod => { res.redirect('/api/productos') })
                    .catch(error => { res.status(500).json(error) })
            })
            .catch(error => { res.status(500).json(error) })
    }
})

// Server start
const server = app.listen(port, () => {
    console.log(`Server is running on ${server.address().port}`)
})

// Server error
server.on('error', (err) => {
    console.error(`Error: ${err.message}`)
})