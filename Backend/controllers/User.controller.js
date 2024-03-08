const bcrypt = require("bcrypt");
const { Users } = require("../models"); //destructure the table name from the model


// Register function
const register = async (req, res) => {
  const { user_lastname,user_firstname,user_email, user_type, password } = req.body;

  bcrypt.hash(password, 10).then((hashRes) => {
    Users.create({ user_lastname: user_lastname,user_firstname: user_firstname,user_email: user_email,user_type: user_type ,password: hashRes });
  });

  res.send("register successfully");
};


// login function
const login = async (req, res) => {
  // const { username, password } = req.body
  
  // const userQuery = await Users.findOne({ where: {username: username}})

  // if(!userQuery) res.json({error: 'User does not exist'})

  // //compare the password from user and password in the database
  // bcrypt.compare(userQuery.password, password).then((isMatch) => {
  //   if(!isMatch) res.json({error: 'wrong password'})
    
  //   res.json("login success");
  // })
 
  res.send("working login");
};

module.exports = { login, register };
