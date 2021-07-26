const ExtractJWT = require("passport-jwt").ExtractJwt;

const { SECRET_TOKEN } = require("../constants");

const authConfig = {
    usernameField: "email",
    passwordField: "password",
};

// const githubConfig = {
//   clientID: process.env.GITHUB_CLIENT_ID || 'FAKE_ID',
//   clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
//   callbackURL: "http://localhost:3000/auth/github/callback",
// };

const JWTconfig = {
    secretOrKey: SECRET_TOKEN,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
};

// module.exports = {
//     authConfig,
//     JWTconfig,
//     githubConfig,
// };

module.exports = {
    authConfig,
    JWTconfig,
};