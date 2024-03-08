module.exports = (sequelize, DataTypes) => {
  
  const Users = sequelize.define("Users", {  // defined table name is"Users"
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_type: {
      type: DataTypes.ENUM('student', 'instructor'),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return Users
}