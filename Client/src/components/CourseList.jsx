//import React from 'react'
import CourseCard from "./CourseCard";
import '../assets/styles/course.css'



const courses = [
  {
    title: 'Complete training on react.js with projects',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/frontend-web-development-with-react-js-design-template-579c0a6dabb1443eb54339c89891da9d_screen.jpg?ts=1679758911',
    oldPrice: 245,
    newPrice: 199,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Master Javascript : Complete training with Certification',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/editable-custom-thumbnail-java-script-design-template-e2494af667376682724e617378b9a67a.webp?ts=1709580677',
    oldPrice: 50,
    newPrice: 39.99,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Complete training on react.js with projects',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/frontend-web-development-with-react-js-design-template-579c0a6dabb1443eb54339c89891da9d_screen.jpg?ts=1679758911',
    oldPrice: 245,
    newPrice: 199,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Master Javascript : Complete training with Certification',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/editable-custom-thumbnail-java-script-design-template-e2494af667376682724e617378b9a67a.webp?ts=1709580677',
    oldPrice: 50,
    newPrice: 39.99,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Complete training on react.js with projects',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/frontend-web-development-with-react-js-design-template-579c0a6dabb1443eb54339c89891da9d_screen.jpg?ts=1679758911',
    oldPrice: 245,
    newPrice: 199,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Master Javascript : Complete training with Certification',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/editable-custom-thumbnail-java-script-design-template-e2494af667376682724e617378b9a67a.webp?ts=1709580677',
    oldPrice: 50,
    newPrice: 39.99,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Complete training on react.js with projects',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/frontend-web-development-with-react-js-design-template-579c0a6dabb1443eb54339c89891da9d_screen.jpg?ts=1679758911',
    oldPrice: 245,
    newPrice: 199,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Master Javascript : Complete training with Certification',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/editable-custom-thumbnail-java-script-design-template-e2494af667376682724e617378b9a67a.webp?ts=1709580677',
    oldPrice: 50,
    newPrice: 39.99,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Complete training on react.js with projects',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/frontend-web-development-with-react-js-design-template-579c0a6dabb1443eb54339c89891da9d_screen.jpg?ts=1679758911',
    oldPrice: 245,
    newPrice: 199,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Master Javascript : Complete training with Certification',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/editable-custom-thumbnail-java-script-design-template-e2494af667376682724e617378b9a67a.webp?ts=1709580677',
    oldPrice: 50,
    newPrice: 39.99,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Complete training on react.js with projects',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/frontend-web-development-with-react-js-design-template-579c0a6dabb1443eb54339c89891da9d_screen.jpg?ts=1679758911',
    oldPrice: 245,
    newPrice: 199,
    start_date: "",
    end_date: "",
  },
  {
    title: 'Master Javascript : Complete training with Certification',
    instructor: 'Instructor User',
    description: "",
    image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/editable-custom-thumbnail-java-script-design-template-e2494af667376682724e617378b9a67a.webp?ts=1709580677',
    oldPrice: 50,
    newPrice: 39.99,
    start_date: "",
    end_date: "",
  },

];


const CourseList = () => {
  return (
    <div className="course-list">
    {courses.map((course, index) => (
      <CourseCard key={index} course={course} />
    ))}
  </div>
  )
}

export default CourseList