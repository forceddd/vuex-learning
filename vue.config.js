const products = [
    { id: 1, title: 'iphone11', price: 800, inventory: 10 },
    { id: 2, title: 'iphone10', price: 600, inventory: 10 },
    { id: 3, title: 'iphone9', price: 800, inventory: 10 },
]
module.exports = {
    devServer: {
        before(app, server) {
            app.get('/api/products', (req, res) => {
                res.json({
                    data: products
                })
            })
        }
    }
}