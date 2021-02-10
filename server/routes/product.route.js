const ProductController = require('../controllers/product.controller');
 
module.exports = app => {
    app.post('/api/product/new', ProductController.createNewProduct);
    app.get('/api/product', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/find/:id', ProductController.updateProduct);
    app.delete('/api/finds/:id', ProductController.deleteProduct);

}