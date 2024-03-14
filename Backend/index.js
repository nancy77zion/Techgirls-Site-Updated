const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(express.json()); // allows you write json objects to body
app.use(cors())
dotenv.config();

const db = require("./models");

//routers
const userRouter = require("./routes/User.route")



//endpoint routes
app.use("/auth", userRouter)


//middleware to handle errors
app.use((err,req, res, next) => {
  const statusCode = err.statusCode || 500  
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,   //after es6 if the variable and key has same name, then no need to write it as-- statusCode: statusCode
    message,
  }) 

})


db.sequelize.sync().then(() => {
  const port = 4005;
  app.listen(port, () => {
    console.log("Server listening on " + port);
  });
});
