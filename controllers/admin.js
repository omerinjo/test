const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Product, Color, ProductState, Size } = require('../models');

module.exports = {
    addProduct: async (req, res, next) => {

        const record = {
            name: req.body.name,
            description: req.body.description,
            colorId: req.body.productColorId,
            sizeId: req.body.productSizeId,
            productStateId: req.body.productStateId,
            price: req.body.price,
        }
        await Product.create(record)

        return res.status(200).json({ msg: "product is saved" })
    }
}