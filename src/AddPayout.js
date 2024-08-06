import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function AddPayout() {
  return (
    <>
      <Menu />
      <main id="main" className="main">
      <div className="d-flex justify-content- mb-2">
           <Link to="/Payout">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow mb-lg-5">
                <div className="card-header text-bg-primary mb-3">
                  <h5>Add Payout</h5>
                </div>
                <div className="card-body">
                  <form>
                   
                    <div className="mb-3">
                      <label htmlFor="TeacherId" className="form-label">Teacher Id</label>
                      <input type="text" className="form-control" id="TeacherId" placeholder="Teacher Id" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="OrderDate" className="form-label">Order Date</label>
                      <input type="date" className="form-control" id="OrderDate" placeholder="Order Date" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Remarks" className="form-label">Remarks</label>
                      <input type="text" className="form-control" id="Remarks" placeholder="Remarks" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="StartDate" className="form-label">Start Date</label>
                      <input type="date" className="form-control" id="StartDate" placeholder="Start Date" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EndDate" className="form-label">End Date</label>
                      <input type="date" className="form-control" id="EndDate" placeholder="End Date" />
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
