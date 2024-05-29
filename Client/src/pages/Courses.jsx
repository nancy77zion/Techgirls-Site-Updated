//import React from 'react'
import CourseList from "../components/CourseList";
import '../assets/styles/course.css'



const Courses = () => {
  return (
    <div className="App">
    <h1>We found 13 courses available for you</h1>
    <div className="search-sort-bar">
      <input type="text" placeholder="Search Courses" className="search-bar" />
      <select className="sort-select">
        <option>Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
    <CourseList />
    <div className="pagination">
      <span>1</span>
      <span>2</span>
    </div>
  </div>
);
}

export default Courses