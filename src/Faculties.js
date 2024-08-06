import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
export default function Faculties() {
    return(<>
       <Menu />
        <main id="main" className="main">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <h3> <i className="fa-solid fa-chalkboard-user" />  Faculties</h3>
    <Link title="Add Faculties" to="/AddFaculties">  <button className="btn btn-primary mt-lg-5">
        <i className="fas fa-plus m" />  Faculty
      </button>
    </Link>
  </div>
  <div className="table-responsive mb-4">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Photo</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Qualification</th>
          <th>Experience</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>08012345678</td>
          <td><img src="assets/img/logo.png" alt="faculty" className="rounded-circle" height="50px" /></td>
          <td>john@gmail.com</td>
          <td>Male</td>
          <td>Phd</td>
          <td>5 years</td>
          <td> <Link title="edit Faculties" to="/EditFaculties"><i className="fa fa-pencil fa-2x p-0" /></Link>
            <Link title="remove Faculties" to="/DeleteFaculties"><i className="fa fa-trash fa-2x" /></Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
   </>
     )
}    