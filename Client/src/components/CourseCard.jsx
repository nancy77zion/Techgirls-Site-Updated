/* eslint-disable react/prop-types */
import {useState} from 'react'
import '../assets/styles/course.css'
import { useNavigate } from "react-router-dom";


const CourseCard = ({course}) => {
  
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleAddCourse = () => {
    navigate('/dashboard')
  }

  return (
    <div
    className="course-card"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <img src={course.image} alt={course.title} className="course-image" />
    <div className="course-details">
      <h3>{course.title}</h3>
      <p>By {course.instructor}</p>
      <p className="price">
        <span className="old-price">${course.oldPrice}</span> ${course.newPrice}
      </p>
    </div>
    {isHovered && (
      <div className="add-to-cart-modal">
        <div className=''>
          <button className="add-to-cart-button" onClick={handleAddCourse}>Add course</button>
          <button className="add-to-cart-button mt-2">Add to Cart</button>
        </div>
       
      </div>
    )}
  </div>
  )
}

export default CourseCard