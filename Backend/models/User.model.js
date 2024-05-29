module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    // defined table name is"Users"
    user_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    user_fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("student", "instructor", "admin"),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    },
  });

  Users.associate = (models) => {
    Users.hasOne(models.Instructor, { foreignKey: "user_id" });
    Users.hasOne(models.Student, { foreignKey: "user_id" });
  };

  return Users;
};
