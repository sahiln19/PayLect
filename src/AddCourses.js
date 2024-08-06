import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function AddCourses() {
    return(
        <>
        <Menu/>
<main id="main" className="main">
<div className="d-flex justify-content- mb-3">
<Link to="/Courses"> <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
         <i className="fas fa-arrow-left"></i> Back
  </button> </Link>
    </div>
<div className="container mb-5">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
    <div className="card shadow mt--lg-5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Add Course</h5>
    </div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="CourseTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="CourseTitle" placeholder="Course Title" />
        </div>
        <div className="mb-3">
          <label htmlFor="CourseFees" className="form-label">Fees</label>
          <input type="text" className="form-control" id="CourseFees" placeholder="Course Fees" />
        </div>
        <div className="mb-3">
          <label htmlFor="DurationTime" className="form-label">Duration</label>
            <div className="d-flex align-items-center">
            <input type="date" className="form-control me-2" id="StartTime" placeholder="Start Time" />
             <span>To</span>
         <input type="date" className="form-control ms-2" id="EndTime" placeholder="End Time" />
           </div>
        </div>
        <div className="mb-3">
          <label htmlFor="CourseDescription" className="form-label">Description</label>
          <input type="text" className="form-control" id="CourseDescription" placeholder="Course Description " />
        </div>
        <div className="d-flex justify-content-center align-items-center mb-2">
          <button type="submit" className="btn btn-primary justify-content-between">Submit</button>
        </div>
      </form>
    </div>
  </div>
  </div>
  </div>
  </div>
</main>
</>
    )
}    