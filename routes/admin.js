const express = require('express');
const router = express.Router();
const adminCtr = require('../controllers/admin');
const passport = require('passport');
require('../config/passport')




router.post('/addnewproduct',
    passport.authenticate('jwt', { session: false }),
    adminCtr.addProduct
)
// router.post('/login',
//     validate(schema.login),
//     userCtrl.login)



module.exports = router;