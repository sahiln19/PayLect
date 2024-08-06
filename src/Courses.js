import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export  default function Courses() {
    return (<>
        <Menu />
        <main id="main" className="main">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <h3><i className="fas fa-layer-group mb-3" /> Courses</h3>
    <Link title="Add Courses"to="/AddCourses">  <button className="btn btn-primary mt-lg-5">
        <i className="fas fa-plus m" />  Course
      </button>
    </Link>
  </div>
  <div className="table-responsive mb-4">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Fees</th>
          <th>Duration</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Web Development</td>
          <td>₹ 5000</td>
          <td>6 months</td>
          <td>Learn web development from scratch</td>
          <td>
            <Link title="edit Course" to="/EditCourses"><i className="fa fa-pencil fa-2x p-0" /></Link>
            <Link title="remove Course" to="/DeleteCourses"><i className="fa fa-trash fa-2x" /></Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
</>
    )
}