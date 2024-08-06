import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function AddFaculties() {    
    return( <>
        <Menu/>
<main id="main" className="main">
<div className="d-flex justify-content mb-3">
           <Link to="/Faculties">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
<div className="container">
  <div className="row justify-content-center">
   <div className="col-md-6 ">
  <div className="card shadow mb--lg-5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Add Faculty</h5>
    </div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="FacultyName" className="form-label">Name</label>
          <input type="text" className="form-control" id="FacultyName" placeholder="Faculty Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="FacultyMobile" className="form-label">Mobile</label>
          <input type="number" className="form-control" id="FacultyMobile" placeholder="Faculty Mobile Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Photo</label>
          <input className="form-control" type="file" id="photo" accept="image/*" required />
        </div>
        <div className="mb-3">
          <label htmlFor="FacultyEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="FacultyEmail" placeholder="Faculty Email Adress" />
        </div>
        <div className="mb-3">
          <label htmlFor="FacultyGender" className="form-label">Gender</label>
          <select className="form-control" id="FacultyGender">
                <option value="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">FeMale</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="FacultyQualification " className="form-label">Qualification </label>
          <input type="text" className="form-control" id="FacultyQualification " placeholder="Faculty Qualification" />
        </div>
        <div className="mb-3">
          <label htmlFor="FacultyExperience" className="form-label">Experience </label>
          <input type="text" className="form-control" id="FacultyExperience" placeholder="Faculty Experience" />
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