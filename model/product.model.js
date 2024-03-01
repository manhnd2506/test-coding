const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
}, {collection: 'Product'});


exports.productModel = mongoose.model('product', productSchema);