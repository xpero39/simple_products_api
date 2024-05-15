// API routes for Products model
require('dotenv').config();

const express = require('express');
const router = express.Router();
const ProductController = require('@controllers/productController');


// GET /api/products
router.get('/products', async (req, res) => {
    const products = await ProductController.findAllProducts();
    res.json(products);
});

// GET /api/products/:id
router.get('/products/:id', async (req, res) => {
    const product = await ProductController.findProductById(req.params.id);
    res.json(product);
});

// POST /api/products
router.post('/products', async (req, res) => {
    const product = await ProductController.createProduct(req.body);
    res.json(product);
});

// PUT /api/products/:id
router.put('/products/:id', async (req, res) => {
    const product = await ProductController.updateProductById(req.params.id, req.body);
    res.json(product);
});

// DELETE /api/products/:id
router.delete('/products/:id', async (req, res) => {
    const product = await ProductController.deleteProductById(req.params.id);
    res.json(product);
});

// GET /api/products/gtin/:GTIN
router.get('/products/gtin/:GTIN', async (req, res) => {
    const product = await ProductController.getProductByGTIN(req.params.GTIN);
    res.json(product);
});

module.exports = router;