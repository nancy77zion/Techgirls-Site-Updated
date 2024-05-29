module.exports = (sequelize, DataTypes) => {

  const Student = sequelize.define("Student", {
    stu_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    learning_track: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Student.associate = (models) => {
    Student.belongsTo(models.Users, {
      foreignKey: "user_id",
    });
    Student.hasMany(models.Course, {
      foreignKey: "stu_id",
    });
  };

  return Student;
};
