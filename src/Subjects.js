import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function EditSubjects() {
    return (<>
   <Menu />
    <main id="main" className="main">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <h3><i className="fa-solid fa-book mb-3" /> Subjects</h3>
    <Link title="Add Subjects" to="/AddSubjects">  <button className="btn btn-primary mt-lg-5">
        <i className="fas fa-plus m" />  Subject
      </button>
    </Link>
  </div>
  <div className="table-responsive mb-4">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Course Id</th>
          <th>Title</th>
          <th>Rate</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>101</td>
          <td>HTML</td>
          <td>₹ 500</td>
          <td>
            <Link title="edit subject" to="/EditSubjects"><i className="fa fa-pencil fa-2x p-0" /></Link>
            <Link title="remove subject" to="/DeleteSubjects"><i className="fa fa-trash fa-2x" /></Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>

    </>)
}