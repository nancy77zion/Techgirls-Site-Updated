module.exports = (sequelize, DataTypes) => {
  
  const Users = sequelize.define("Users", {  // defined table name is"Users"
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_first_name: {
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