import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function EditBatches() {
  return (
    <>
    <Menu/>
    <main id="main" className="main">
    <div className="d-flex justify-content- mb-3">
           <Link to="/Batches">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
    <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
  <div className="card shadow mb--lg-5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Edit Batches </h5>
    </div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="EditId" className="form-label">Edit Idd</label>
          <input type="text" className="form-control" id="EditId" placeholder="Edit Id" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditCourseId" className="form-label">Edit CourseId</label>
          <input type="text" className="form-control" id="EditCourseId" placeholder="Edit Course Id" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditStartDate" className="form-label">Edit Start Date</label>
          <input type="date" className="form-control" id="EditStartDate" placeholder="Edit Start Date" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditEndDate" className="form-label">Edit End Date</label>
          <input type="date" className="form-control" id="EndDate" placeholder="Edit End Date" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditClassTime" className="form-label">Edit Class Time</label>
          <input type="time" className="form-control" id="EditClassTime" placeholder="Edit Class Time" />
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
