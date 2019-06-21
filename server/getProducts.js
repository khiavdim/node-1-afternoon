const products = require('../products.json')

module.exports = getProducts

function getProducts(req, res) {
    const {price} = req.query

    if (price) {
        const pricedItem = products.filter
            (value => +(value.price) >= +(req.query.price))
        return res.status(200).send(pricedItem);
    }
    res.status(200).send(products)
}