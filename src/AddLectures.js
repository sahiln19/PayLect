import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function AddLectures() {
    return (
        <>
            <Menu />
            <main id="main" className="main">
            <div className="d-flex justify-content- mb-2">
           <Link to="/Lectures">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 ">
                            <div className="card shadow mt-lg-5">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">Add Lecture</h5>
                                </div>
                                <div className="card-body mt-2">
                                    <form>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="TeacherId" className="form-label">Teacher Id</label>
                                            <input type="text" className="form-control" id="TeacherId" placeholder="Teacher Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="SubjectId" className="form-label">Subject Id</label>
                                            <input type="text" className="form-control" id="SubjectId" placeholder="Subject Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="BatchId" className="form-label">Batch Id</label>
                                            <input type="text" className="form-control" id="BatchId" placeholder="Batch Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="DurationTime" className="form-label">Duration</label>
                                            <div className="d-flex align-items-center">
                                                <input type="time" className="form-control me-2" id="StartTime" placeholder="Start Time" />
                                                <span>to</span>
                                                <input type="time" className="form-control ms-2" id="EndTime" placeholder="End Time" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="LectureAmount" className="form-label">Lecture Amount</label>
                                            <input type="text" className="form-control" id="LectureAmount" placeholder="Lecture Amount" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="LectureDate" className="form-label">Lecture Date</label>
                                            <input type="date" className="form-control" id="LectureDate" placeholder="Lecture Date" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="PaymentId" className="form-label">Payment Id</label>
                                            <input type="text" className="form-control" id="PaymentId" placeholder="Payment Id" />
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">Submit</button>
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