const express = require('express');
const productController = require('../../controller/product.controller');

const router = express.Router();

router.post('/create', productController.createProduct);
router.get('/read/:id', productController.readProduct);
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);




exports.router = router;