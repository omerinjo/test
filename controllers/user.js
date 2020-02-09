const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { User, Product, ProductState, Color, Size, ShoppingCart } = require('../models');

module.exports = {
    signUp: async (req, res, next) => {
        var record = {
            name: req.body.name,
            address: req.body.address,
            password: await bcrypt.hashSync(req.body.password, 10),
        }
        User.findOne({ where: { name: req.body.name } }).then(user => {
            if (!user) {
                User.create(record).then(registered => {
                    res.status(200).json({ status: 200, message: 'User registered.' });
                }).catch(err => {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    next(err);
                });
            }
            else {
                return res.status(200).json({ msg: `User ${record.name} already exists!` })
            }
        })
    },
    login: async (req, res, next) => {
        const name = req.body.name;
        const password = req.body.password;

        const user = await User.findOne({ where: { name } })
        if (user) {
            let passCorrect = await bcrypt.compare(password, user.password)
            if (passCorrect) {
                const payload = { id: user.id, name: user.name, role: user.userRoleId }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    (err, token) => {
                        if (err) throw err
                        res.json({ token: 'Bearer ' + token })
                    }
                )
            }
            else {
                res.json({ msg: "Password or Name is incorrect" })
            }
        } else {
            res.json({ msg: "Password or Name is incorrect" })
        }
    },
    getProduct: async (req, res, next) => {

        let page = parseInt(req.params.page) || 0;
        let limit = parseInt(req.params.limit) || 100;
        let offset = page * limit;

        var productList = await Product.findAndCountAll({
            limit: limit,
            offset: offset,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [{
                model: Color,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            },
            {
                model: Size,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            },
            {
                model: ProductState,
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
            ]
        })
        return res.status(200).json(productList)
    },

    addToCart: async (req, res, next) => {
        const record = {
            userId: req.user.id,
            productId: req.body.product
        }
        await ShoppingCart.create(record);
        return res.status(200).json({ msg: "add" })
    }
}