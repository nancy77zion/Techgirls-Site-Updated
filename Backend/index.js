const express = require("express");
const app = express();
//const cors = require("cors");

const db = require("./models");


db.sequelize.sync().then(() => {
  const port = 4005;
  app.listen(port, () => {
    console.log("Server listening on " + port);
  });
});
