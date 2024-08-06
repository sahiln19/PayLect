import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function EditCourses() {
    return(
        <>
        <Menu/>
<main id="main" className="main">
<div className="d-flex justify-content- mb-3">
           <Link to="/Courses">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
    </div>
<div className="container">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
    <div className="card shadow mt-lg--5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Edit Course</h5>
    </div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="EditId" className="form-label">Edit Id</label>
          <input type="text" className="form-control" id="EditId" placeholder="Edit Id" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditCourseTitle" className="form-label">Edit Title</label>
          <input type="text" className="form-control" id="EditCourseTitle" placeholder="Edit Course Title" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditCourseFees" className="form-label">Edit Fees</label>
          <input type="text" className="form-control" id="EditCourseFees" placeholder="Edit Course Fees" />
        </div>
        <div className="mb-3">
          <label htmlFor="DurationTime" className="form-label">Edit Duration</label>
            <div className="d-flex align-items-center">
            <input type="date" className="form-control me-2" id="EditStartTime" placeholder="Edit Start Time" />
             <span>To</span>
         <input type="date" className="form-control ms-2" id="EditEndTime" placeholder="Edit End Time" />
           </div>
        </div>
        <div className="mb-3">
          <label htmlFor="EditCourseDescription" className="form-label">Edit Description</label>
          <input type="text" className="form-control" id="EditCourseDescription" placeholder="Edit Course Description " />
        </div>
        <div className="d-flex justify-content-center align-items-center mb-2">
          <button type="submit" className="btn btn-primary justify-content-between">Save Changes</button>
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