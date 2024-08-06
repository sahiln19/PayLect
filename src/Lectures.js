import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
export default function Lectures(){
    return (
        <>
        <Menu />
        <main id="main" className="main">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <h3> <i className="fa-solid fa-sim-card" />  Lectures</h3>
    <a title="Add Lectures" href="add-lectures.html">  <button className="btn btn-primary mt-lg-5">
        <i className="fas fa-plus m" /> Lecture
      </button>
    </a>
  </div>
  <div className="table-responsive mb-4">
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Teacher Id</th>
          <th>Subject Id</th>
          <th>Batch Id</th>
          <th>Duration</th>
          <th>Amount</th>
          <th>Lecture Date</th>
          <th>Payout Id</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1 hour</td>
          <td>₹ 1000</td>
          <td>10-10-2024</td>
          <td>1</td>
          <td> <Link title="edit Lectures" to="/EditLectures"><i className="fa fa-pencil fa-2x p-0" /></Link>
            <Link title="remove Lectures" to="/DeleteLectures"><i className="fa fa-trash fa-2x" /></Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</main>

        </>
    )
}
