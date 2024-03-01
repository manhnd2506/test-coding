const productModel = require('../model/product.model');


async function createProduct(req, res) { 
    let product = {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price
    }

    try {
        let checkProductName = await productModel.productModel.exists(
            {
                productName: {'$regex' : product.productName, $options:'i'}
            }
        );

        if (checkProductName) {
            return res.json('Product name is exists!');
        }

        await productModel.productModel.create(product);
        return res.json('Create product successfully!');
    }
    catch (e) {
        return res.status(500).json();
    }
}


async function readProduct(req, res) { 
    
    try {
        let _id = req.params.id;

        let data = await productModel.productModel.findOne({_id});
        return res.json(data);
    }
    catch (e) {
        return res.status(500).json();
    }
}


async function updateProduct(req, res) { 
    let _id = req.params.id;

    let product = {
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price
    }

    try {
        let checkProductName = await productModel.productModel.exists(
            {
                productName: {'$regex' : product.productName, $options:'i'}
            }
        );

        if (checkProductName) {
            return res.json('Product name is exists!');
        }

        let data = await productModel.productModel.updateOne({_id}, product);
        
        if (data) return res.status(500).json();
        else return res.json('Update product successfully!');
    }
    catch (e) {
        return res.status(500).json();
    }

}

async function deleteProduct(req, res) { 
    
    try {
        let _id = req.params.id;

        await productModel.productModel.deleteOne({_id});
        return res.json("Delete product successfully");
    }
    catch (e) {
        return res.status(500).json();
    }
}




exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.readProduct = readProduct;
exports.deleteProduct = deleteProduct;