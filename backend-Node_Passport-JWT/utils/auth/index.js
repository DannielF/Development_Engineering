// passport.js
// Language: javascript

const passport = require('passport');
const LocalStrategy = require('../auth/strategies/local.strategy');
const JwtStrategy = require('../auth/strategies/jwt.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);