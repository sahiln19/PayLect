import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function AddBatches() {
  return (
    <>
    <Menu/>
    <main id="main" className="main">
    <div className="d-flex justify-content- mb-2">
           <Link to="/Batches">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
    <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
  <div className="card shadow mb-lg-5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Add Batch </h5>
    </div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="Id" className="form-label">Id</label>
          <input type="text" className="form-control" id="Id" placeholder="Id" />
        </div>
        <div className="mb-3">
          <label htmlFor="CourseId" className="form-label">CourseId</label>
          <input type="text" className="form-control" id="CourseId" placeholder="Course Id" />
        </div>
        <div className="mb-3">
          <label htmlFor="StartDate" className="form-label">Start Date</label>
          <input type="date" className="form-control" id="StartDate" placeholder="Start Date" />
        </div>
        <div className="mb-3">
          <label htmlFor="End" className="form-label">End Date</label>
          <input type="date" className="form-control" id="EndDatel" placeholder="End Date" />
        </div>
        <div className="mb-3">
          <label htmlFor="ClassTime" className="form-label">Class Time</label>
          <input type="time" className="form-control" id="ClassTime" placeholder="Class Time" />
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
