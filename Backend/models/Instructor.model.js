module.exports = (sequelize, DataTypes) => {
  const Instructor = sequelize.define("Instructor", {
    instru_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Instructor.associate = (models) => {
    Instructor.belongsTo(models.Users, {
      foreignKey: "user_id",
    });
    Instructor.hasMany(models.Course, {
      foreignKey: "instru_id",
    });
  };

  return Instructor;
};
