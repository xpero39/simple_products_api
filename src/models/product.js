require('dotenv').config()
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL);

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,

}, {
    sequelize,
    modelName: 'Product'
});

module.exports = Product;

//Additional fields:
//GTIN/EAN: DataTypes.INTEGER
//SKU: DataTypes.INTEGER
//UPC: DataTypes.INTEGER
//image: DataTypes.STRING
//stock: DataTypes.INTEGER
//MPN: DataTypes.INTEGER - manufacturer part number
//BrandId: DataTypes.INTEGER
//CategoryId: DataTypes.INTEGER
//SupplierId: DataTypes.INTEGER