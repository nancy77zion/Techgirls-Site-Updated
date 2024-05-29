
const errorHandler = require("../middlewares/error")
const {Instructor, Course } = require("../models")

const allCourse = async (req, res, next) => {

  try {
    const courses = await Course.findAll();

    res.status(200).json({
        success: true,
        data: courses
    })
} catch (error) {
    next()
}
}

const oneCourse = async (req, res, next) => {

  try {
    const singleCourse = await Course.findOne({ where: {course_id: req.params.id }})

    if (!singleCourse) return next(errorHandler(403, 'Course not found'))

    res.status(200).json({result: singleCourse, success: true, message: 'Course found'});

  } catch (error) {
    next(error)
  }

}


const addCourse = async (req, res, next) => {
  try {
    
    const {title, instructor, description, image,oldPrice, newPrice,start_date, end_date, instru_id} =req.body

    const existInstructor = await Instructor.findByPk(instru_id)

    if (!existInstructor) {
      return next(errorHandler(403 , 'instructor not found'))
    }

    const newCourse = await Course.create({
      title,
      instructor,
      description,
      image,
      oldPrice,
      newPrice,
      start_date,
      end_date,
      instru_id
    })

    res.status(201).json({ message: 'new course added successfully', result: newCourse });

  } catch (error) {
    next(error)
  }
}


const updateCourse = async (req, res, next) => {

  try {
    
    const {course_id,title, instructor, description, image,oldPrice, newPrice,start_date, end_date, instru_id} =req.body

    const existInstructor = await Instructor.findByPk(instru_id)
    if (!existInstructor) {
      return next(errorHandler(403 , 'instructor not found'))
    }

    const existingCourse = await Course.findByPk(course_id);
    if (!existingCourse) {
      return next(errorHandler(403,'course not found'))
    }

    await existingCourse.update({
      title: title ? title : existingCourse.title,
      instructor: instructor ? instructor : existingCourse.Instructor,
      description: description ? description : existingCourse.description,
      image: image ? image : existingCourse.image,
      oldPrice: oldPrice ? oldPrice : existingCourse.oldPrice,
      newPrice: newPrice ? newPrice : existingCourse.newPrice,
      start_date: start_date ? start_date : existingCourse.start,
      end_date: end_date ? end_date : existingCourse.end_date
    })

    res.status(200).json({ message: 'course updated successfully', result: existingCourse });

  } catch (error) {
    next(error)
  }

}

const deleteCourse = async (req, res, next) => {
  try {
    
    const {course_id} = req.params

    // const existInstructor = await Course.findByPk(instru_id)
    // if (!existInstructor) {
    //   return next(errorHandler(403 , 'instructor not found'))
    // }

    const existingCourse = await Course.findByPk(course_id);
    if (!existingCourse) {
      return next(errorHandler(403,'course not found'))
    }

    await existingCourse.destroy();

    res.status(200).json({ message: 'course deleted successfully' });

  } catch (error) {
    next(error);
  }
}

module.exports = {allCourse, addCourse, deleteCourse, updateCourse, oneCourse}