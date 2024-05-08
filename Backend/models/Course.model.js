module.exports = (sequelize, DataTypes) => {

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  course_instructor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  course_description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  course_start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  course_end_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
})

return Course;
}