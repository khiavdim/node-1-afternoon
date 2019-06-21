const products = require('../products.json')

module.exports = getProduct

function getProduct(req, res) {
    let {id} = req.params
    for (let i = 0; i <= products.length; i++){
        if (+products[i].id === +id){
            return res.send(products[i])
        } else {
        }
    }
    return res.status(500).send('Item not in list')
}