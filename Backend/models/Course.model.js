module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    course_id: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false,
      primaryKey:true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      default:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/editable-custom-thumbnail-java-script-design-template-e2494af667376682724e617378b9a67a.webp?ts=1709580677",
    },
    oldPrice: {
      type: DataTypes.DECIMAL,
    },
    newPrice: {
      type: DataTypes.DECIMAL,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
  });

  Course.associate = (models) => {
    Course.belongsTo(models.Instructor, {
      foreignKey: "instru_id",
    });
    Course.belongsTo(models.Student, {
      foreignKey: "stu_id",
    });
  };

  return Course;
};
