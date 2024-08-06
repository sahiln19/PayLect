import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function AddSubjects() {
    return (
        <>
        <Menu/>
 <main id="main" className="main">
 <div className="d-flex justify-content- mb-2">
           <Link to="/Subjects">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
 <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
  <div className="card shadow mt--lg-5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Add Subject</h5>
    </div>
    <div className="card-body">
      <form>
      
        <div className="mb-3">
          <label htmlFor="courseId" className="form-label">Course ID</label>
          <input type="text" className="form-control" id="courseId" placeholder="Enter Course ID" />
        </div>
        <div className="mb-3">
          <label htmlFor="subjectTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="subjectTitle" placeholder="Enter Title" />
        </div>
        <div className="mb-3">
          <label htmlFor="subjectRate" className="form-label">Rate</label>
          <input type="text" className="form-control" id="subjectRate" placeholder="Enter Rate" />
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
    );
    }