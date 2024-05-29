
const bcrypt = require("bcrypt");
const { Users } = require("../models"); //destructure the table name from the model
const { sign } = require("jsonwebtoken");
const errorHandler = require("../middlewares/error")

// Register function
const register = async (req, res , next) => {
 
  try {
    const { user_fullname, user_email, role, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser =await Users.create({
      user_fullname,
      user_email,
      role,
      password: hashedPassword,
    });

    
    res.status(200).json({
      success: true,
      result: newUser,
  });
    
  } catch (error) {
    // console.error('Error occurred:', error);
    // res.status(500).json({ error: 'Internal server error' });
    next(error); //middleware from index.js
  }
  
}

// login function
const login = async (req, res, next) => {
  try {
    const { user_email, password } = req.body;

    const userQuery = await Users.findOne({
      where: { user_email: user_email},
    });

    if (!userQuery) {
      return next(errorHandler(401, "User not found"));
      //return res.json({ error: "User does not exist" });
    }

    // Compare the password from user input and password in the table
    bcrypt.compare(password, userQuery.password).then((isMatch) => {
      if (!isMatch) {
        return next(errorHandler(401, "Wrong email and password"))
        //return res.json({ error: "Wrong email and password" });
      }

      // generate web token for user after successful login

      const accessToken = sign(
        { user_id: userQuery.user_id},
        process.env.JWT_TOKEN
      ); //using the id of the user to generate web token

      const { password: pass, ...restInfo } = userQuery._previousDataValues;

      // Set the access token as a cookie
      res.cookie("access_token", accessToken, {
        httpOnly: true, // Cookie cannot be accessed via client-side scripts
        maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours (optional)
      })
      .status(200).json({
        success: true,
        result: restInfo
      }) //send response without password
      // Send the response with user information
      //res.status(200).json(accessToken);
    });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

const google = async (req, res, next) => {

  try {
    const { user_email} = req.body;

    const googleUser = await Users.findOne({
      where: { user_email: user_email},
    });
    if (googleUser) {
      const accessToken = jwt.sign({ id: googleUser._id }, process.env.JWT_SECRET);       

      const { password: pass, ...rest } = googleUser._previousDataValues;
      res
        .cookie("access_token", accessToken, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      /* because with google signup passwords are needed but on the schema its required we need to generate a password for the user later the user may choose to update it */
       // if the user is not found generate a password for the user and create
       const generatedPassword =
       Math.random().toString(36).slice(-8) +
       Math.random().toString(36).slice(-8); //random number and letters 0-9 & a-z

     const hashedPassword = bcrypt.hashSync(generatedPassword, 10);

     const newUser = new Users({
       user_fullname:
         req.body.name.split(" ").join("").toLowerCase() +
         Math.random().toString(36).slice(-4),
       user_email: req.body.email,
       password: hashedPassword,
       avatar: req.body.photo,
     });

     await newUser.save();
     const accessToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
     const { password: pass, ...restInfo } = newUser._previousDataValues;
     res
       .cookie('access_token', accessToken, { httpOnly: true })
       .status(200)
       .json({result: restInfo, success: true});

    }
  } catch (error) {
    next(error);
  }
}

//log out
const logout = async (req, res, next) => {
  try {
    const { user_id }= req.body
    const user = await Users.findOne({
      where: { user_id: user_id }
    });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    // Clear the access token cookie
    res.clearCookie('access_token');
    res.status(200).json({ success: true, message: 'Logout successful' });
  } catch (error) {
    // Handle errors
    console.error('Error logging out:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { login, register, google, logout };
