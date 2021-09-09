const products = require('../data/products.json');

module.exports = {
    index : (req,res) => res.render('index', {
        tittle: "Pimienta & Sal",
        images: "/principal.jpg",
        products
    }),
    detail : (req,res) => {
        return res.render('detalleMenu', {
            product : products.find(product => product.id === +req.params.id)
        })
    }
}