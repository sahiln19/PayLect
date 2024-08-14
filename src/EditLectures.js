import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function EditLectures() {
    return (
        <>
            <Menu />
            <main id="main" className="main">
            <div className="d-flex justify-content- mb-3">
           <Link to="/Lectures">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 ">
                            <div className="card shadow mt--lg-5">
                                <div className="card-header bg-primary text-white">
                                    <h5 className="mb-0">Edit Lecture</h5>
                                </div>
                                <div className="card-body mt-2">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="EditLectureId" className="form-label">Edit Id</label>
                                            <input type="text" className="form-control" id="EditLectureId" placeholder="Edit Lecture Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="EditTeacherId" className="form-label">Edit Teacher Id</label>
                                            <input type="text" className="form-control" id="EditTeacherId" placeholder="Edit Teacher Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="EditSubjectId" className="form-label">Edit Subject Id</label>
                                            <input type="text" className="form-control" id="EditSubjectId" placeholder="Edit Subject Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="EditBatchId" className="form-label">Edit Batch Id</label>
                                            <input type="text" className="form-control" id="EditBatchId" placeholder="Edit Batch Id" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="EditDurationTime" className="form-label">Edit Duration</label>
                                            <div className="d-flex align-items-center">
                                                <input type="time" className="form-control me-2" id="StartTime" placeholder="EditS tart Time" />
                                                <span>to</span>
                                                <input type="time" className="form-control ms-2" id="EndTime" placeholder="Edit End Time" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="EditLectureAmount" className="form-label">Edit Lecture Amount</label>
                                            <input type="text" className="form-control" id="Edit LectureAmount" placeholder="Edit Lecture Amount" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="EditLectureDate" className="form-label">Edit Lecture Date</label>
                                            <input type="date" className="form-control" id="EditLectureDate" placeholder="Edit Lecture Date" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="EditPaymentId" className="form-label">Edit Payment Id</label>
                                            <input type="text" className="form-control" id="EditPaymentId" placeholder="Edit Payment Id" />
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
