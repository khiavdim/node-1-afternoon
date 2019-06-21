const express = require('express')
const app = express()
const port = 3007
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log('We are LIVE from port', port)
})


