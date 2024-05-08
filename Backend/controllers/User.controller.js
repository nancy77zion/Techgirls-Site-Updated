
const bcrypt = require("bcrypt");
const { Users } = require("../models"); //destructure the table name from the model
const errorHandler = require("../middlewares/error")


const getUserById = async (req, res, next) => {
  try {
    
    const user = await Users.findOne({where: {user_id: req.params.id}});

    if (!user) return next(errorHandler(404, 'User not found!'));

    const { password: pass, ...rest } = user._previousDataValues;
  
    res.status(200).json({result: rest});

  } catch (error) {
    
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
  //res.send('hello world')
  try {
    const userId = req.user.id;
    const requestedUserId = req.params.id;

    if (userId !== requestedUserId) {
      return next(errorHandler(401, 'You can only update your own account!'));
    }

    const updatedFields = {};

    if (req.body.password) {
      updatedFields.password = bcrypt.hash(req.body.password, 10);
    }

    updatedFields.username = req.body.username;
    updatedFields.email = req.body.email;
    //updatedFields.avatar = req.body.avatar;

    const [updatedRowCount] = await Users.update(updatedFields, {
      where: { id: requestedUserId },
    });

    if (updatedRowCount === 0) {
      return next(errorHandler(404, 'User not found'));
    }

    const updatedUser = await Users.findByPk(requestedUserId, {
      attributes: { exclude: ['password'] },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }

}


// const  updateUser = async (req, res, next) => {

//   try {
//     const {username, phoneNumber} =  req.body

//     const user = await db.models.Users.findOne({ where: { userId: req.params.id } });

//     if (!user) {
//       return next(errorHandler(401, 'You can only update your own account!'));
//     } else {

//       const updateField = await db.models.Users.update({
//         username: username ? username : user.username,
//         phoneNumber: phoneNumber ? phoneNumber : user.phoneNumber
//       },
//       {
//         where: {
//           userId : user.userId
//         }})
//         res.status(201).json({
//           success: true,
//           data: updateField
//       });
//     }

//   } catch (error) {
//     next(error);
//   }

// }



module.exports = {updateUser, getUserById, deleteUser}