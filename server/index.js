const express = require("express");
const routes = require("./allRoutes");
const app = express(); //vai executar o express
const cors = require("cors");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  app.use(cors());
  next();
});
app.use(routes);

app.listen(8888);
