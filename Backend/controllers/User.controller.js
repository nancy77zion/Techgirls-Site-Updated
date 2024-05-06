
const bcrypt = require("bcrypt");
const { Users } = require("../models"); //destructure the table name from the model
const errorHandler = require("../middlewares/error")

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



module.exports = {updateUser}