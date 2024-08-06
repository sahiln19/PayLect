import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function EditSubjects() {
    return (
        <>
        <Menu/>
 <main id="main" className="main">
 <div className="d-flex justify-content- mb-3">
           <Link to="/Subjects">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
 <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
  <div className="card shadow mt--lg-5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Edit Subject</h5>
    </div>
    <div className="card-body">
      <form>
       
        <div className="mb-3">
          <label htmlFor="EditcourseId" className="form-label">Edit Course Id</label>
          <input type="text" className="form-control" id="EditcourseId" placeholder="Edit Course ID" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditsubjectTitle" className="form-label">Edit Title</label>
          <input type="text" className="form-control" id="EditsubjectTitle" placeholder="Edit Title" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditsubjectRate" className="form-label">Edit Rate</label>
          <input type="text" className="form-control" id="EditsubjectRate" placeholder="Edit Rate" />
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