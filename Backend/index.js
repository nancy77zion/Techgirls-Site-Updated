const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); // allows you write json objects to body
app.use(cors())

const db = require("./models");

//routers
const userRouter = require("./routes/User.route")



//endpoint routes
app.use("/auth", userRouter)



db.sequelize.sync().then(() => {
  const port = 4005;
  app.listen(port, () => {
    console.log("Server listening on " + port);
  });
});
