import Product from '../models/productModel.js';

class ProductController {
    static async findProductById(id) {
        return Product.findProductById(id);
    }
    static async findAllProducts() {
        return Product.findAllProducts();
    }

    static async createProduct(product) {
        return Product.createProduct(product);
    }
    static async updateProductById(id, product) {
        return Product.updateProductById(id, product);
    }

    static async deleteProductById(id) {
        return Product.deleteProductById(id);
    }

    static async getProductByGTIN(GTIN) {
        return Product.getProductByGTIN(GTIN);
    }
}