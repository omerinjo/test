const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { User } = require('../models')


passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}, async (jwt_payload, done) => {
    try {
        const user = await User.findByPk(jwt_payload.id)
        if (!user) {
            return done(null, false)
        } else {
            done(null, user)
        }

    }
    catch (error) {
        done(error, false)
    }
}))

module.exports = passport