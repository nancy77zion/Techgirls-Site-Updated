
const bcrypt = require("bcrypt");
const { Users } = require("../models"); //destructure the table name from the model
const errorHandler = require("../middlewares/error")


const getUserById = async (req, res, next) => {
  try {
    
    const user = await Users.findOne({where: {user_id: req.params.id}});

    if (!user) return next(errorHandler(404, 'User not found!'));

    const { password: pass, ...rest } = user._previousDataValues;
  
    res.status(200).json({result: rest, success: true});

  } catch (error) {
    next(error);
  }
}

const deleteUser = async (req, res, next) => {
  try {
    // Find the user by ID
    const user = await Users.findOne({ where: { user_id: req.params.id } });

    // If user not found, return 404 error
    if (!user) {
      return next(errorHandler(404, 'User not found!'));
    }

    // Delete the user
    await user.destroy();

    // Respond with success message
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    // Handle any errors
    next(error);
  }
};


const  updateUser = async (req, res, next) => {

  try {
    const {user_fullname, user_email} =  req.body

    const user = await Users.findOne({ where: { user_id: req.params.id } });

    if (!user) {
      return next(errorHandler(401, 'You can only update your own account!'));
    } else {

      const updateField = await Users.update(
        {
          user_fullname: user_fullname ? user_fullname : user.user_fullname,
          user_email: user_email ? user_email : user.user_email,
        },
        {
          where: {
            user_id: user.user_id,
          },
        }
      );
        res.status(201).json({
          success: true,
          result: updateField
      });
    }

  } catch (error) {
    next(error);
  }

}



module.exports = {updateUser, getUserById, deleteUser}