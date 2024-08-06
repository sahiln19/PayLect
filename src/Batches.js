import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
export default function Batches() {
    return(
        <>
        <Menu />
        <main id="main" className="main">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <h3><i className="fa-solid fa-people-group" /> Batches</h3>
    <Link title="Add Batches" to="/AddBatches">  <button className="btn btn-primary mt-lg-5">
        <i className="fas fa-plus m" />  Batches
      </button>
    </Link>
  </div>
  <div className="table-responsive mb-4">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Course Id</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Class Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>101</td>
          <td>10-01-2024</td>
          <td>10-07-2024</td>
          <td>10:00 AM</td>
          <td>
            <Link title="edit Batches" className="p-1" to="/EditBatches"><i className="fa fa-pencil fa-2x p-0" /></Link>
            <Link title="remove Batches" to="/DeleteBatches"><i className="fa fa-trash fa-2x" /></Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>
        </>
    )
}    