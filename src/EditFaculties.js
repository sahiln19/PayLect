import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function EditFaculties() {    
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
      <h5>Edit Faculty</h5>
    </div>
    <div className="card-body">
      <form>
        <div className="mb-3">
          <label htmlFor="EditFacultyName" className="form-label">Edit Name</label>
          <input type="text" className="form-control" id="EditFacultyName" placeholder="Edit Faculty Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditFacultyMobile" className="form-label">Edit Mobile</label>
          <input type="number" className="form-control" id="EditFacultyMobile" placeholder="Edit Faculty Mobile Number" />
        </div>
        <div className="mb-3">
          <label htmlFor="Editphoto" className="form-label">Edit Photo</label>
          <input className="form-control" type="file" id="Editphoto" accept="image/*" required />
        </div>
        <div className="mb-3">
          <label htmlFor="EditFacultyEmail" className="form-label">Edit Email</label>
          <input type="email" className="form-control" id="EditFacultyEmail" placeholder="Edit Faculty Email Adress" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="EditFacultyGender" className="form-label">Edit Gender</label>
          <select className="form-control" id="EditFacultyGender">
                <option value="select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="EditFacultyQualification " className="form-label">Edit Qualification </label>
          <input type="text" className="form-control" id="EditFacultyQualification " placeholder="Edit Faculty Qualification" />
        </div>
        <div className="mb-3">
          <label htmlFor="EditFacultyExperience" className="form-label">Edit Experience </label>
          <input type="text" className="form-control" id="EditFacultyExperience" placeholder="Edit Faculty Experience" />
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