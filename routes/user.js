const express = require('express');
const router = express.Router();
const userCtr = require('../controllers/user');
const passport = require('passport');
require('../config/passport')



// registration
router.post('/',
    userCtr.signUp)

// login user/admin
router.post('/login',
    userCtr.login)


router.get('/getallproducts',
    passport.authenticate('jwt', { session: false }),
    userCtr.getProduct
)

router.post('/cart',
    passport.authenticate('jwt', { session: false }),
    userCtr.addToCart
)

// router.post('/login',
//     validate(schema.login),
//     userCtrl.login)



module.exports = router;