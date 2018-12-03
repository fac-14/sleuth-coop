const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const getCompanyInfo = require("./database/queries/getCompanyInfo");
// setup options for the passport
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
};

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log("hello");
      getCompanyInfo(jwt_payload.id)
        .then(company => {
          if (company) {
            return done(null, company);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
