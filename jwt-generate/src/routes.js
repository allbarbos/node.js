const routes = require("express").Router();

const authenticate = require("./app/controllers/authenticate-controller");
const validateCredentials = require("./middlewares/credentials");

const path = "/auth/v1";

routes.get(`${path}/health-check`, (req, res) => res.status(200).send());

routes.use(validateCredentials);

routes.get(`${path}/token`, authenticate.token);

module.exports = routes;
