const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./product-router/product.router');

const mainRouter = express.Router();

mainRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return next();
});

mainRouter.use(bodyParser.urlencoded({extended: false}));
mainRouter.use(bodyParser.json());

mainRouter.use('/product', productRouter.router);

exports.mainRouter = mainRouter;