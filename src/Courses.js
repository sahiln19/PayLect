import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import axios from "axios";
import Menu from "./Menu";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    let apiAddress = getBase() + "course";
    axios.get(apiAddress)
      .then((response) => {
        // Sort courses by ID before setting state
        const sortedCourses = response.data.sort((a, b) => a.id - b.id);
        setCourses(sortedCourses);
      })
      .catch((error) => {
        console.error("Error details:", error);
        showError("There was an error!", error);
      });
  }, []);

  const DisplayCourse = (item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.fees}</td>
        <td>{item.duration}</td>
        <td>{item.description}</td>
        <td>
          <Link to={`/EditCourses/${item.id}`} title="Edit Course">
            <button className="btn btn-primary btn-sm me-2 ms-3">
              <i className="fas fa-edit" />
            </button>
          </Link>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
            <i className="fas fa-trash" />
          </button>
        </td>
      </tr>
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const apiAddress = getBase() + `course/${id}`;
      axios
        .delete(apiAddress)
        .then(() => {
          showMessage("Course deleted successfully");
          setCourses(courses.filter((course) => course.id !== id));
        })
        .catch((error) => {
          showError("Failed to delete course");
        });
    }
  };

  return (
    <>
      <Menu />
      <main id="main" className="main">
        <ToastContainer />
        <div className="mb-4 mt-3">
          <h2>
            <i className="fas fa-layer-group mb-2" /> Courses
          </h2>
        </div>
        <div className="card mt-4">
          <div className="card-body shadow">
            <div className="d-flex justify-content-end align-items-center mb-2 mt-3">
              <Link title="Add Course" to="/AddCourses">
                <button className="btn btn-primary">
                  <i className="fas fa-plus" /> Course
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
                    <th style={{ width: '120px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>{courses.map((item) => DisplayCourse(item))}</tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
