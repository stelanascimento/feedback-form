const express = require("express");
const users = require("./controllers/users");

const routes = express();

//Users
routes.get("/show", users.showFeedbacks);
routes.post("/show", users.registerFeedback);

module.exports = routes;
