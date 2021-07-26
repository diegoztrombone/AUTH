const express = require("express");
const passport = require("passport");

const logger = require("morgan");
const debug = require("debug")("app");

require("./database");
require("./auth/passport");


const { PORT } = require("./constants")

const app = express();


app.use(logger("dev"));
app.use(passport.initialize());

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/routes'))

app.use((req, res, next) => {
    next({status: 404, info: new Error("Rúta inválida")})
})

app.use(({status = 500, info}, req, res, next) => {
    res.status(status).json({
        success: false,
        message: info.message
    })
  });

app.listen(PORT, () => {
    console.log(`SERVIDOR FUNCIONANDO EN PUERTO ${PORT}`)
})