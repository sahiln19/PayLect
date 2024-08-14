import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

export default function AddCourses() {
  const [title, setTitle] = useState("");
  const [fees, setFees] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "duration") setDuration(value);
    if (name === "description") setDescription(value);
    if (name === "fees") setFees(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiAddress = getBase() + "course";
    const courseData = {
      title, 
      fees,
      duration,
      description
    };
    console.log("Form Data:", courseData);  // Debugging: Log the data being sent
    axios.post(apiAddress, courseData)
      .then((response) => {
        console.log("Response:", response);  // Debugging: Check the response from the server
        setTitle("");
        setFees("");
        setDuration("");
        setDescription("");
        showMessage("Course added successfully.");
        setTimeout(() => {
          navigate("/Courses");
        }, 2000);
      })
      .catch((error) => { 
        console.error("Error:", error);  // Debugging: Log the error for more details
        showError("The course couldn't be added.");
      });
  };
  

  return (
    <>
      <Menu />
      <main id="main" className="main">
        <div className="d-flex justify-content- mb-3">
          <Link to="/Courses">
            <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
              <i className="fas fa-arrow-left"></i> Back
            </button>
          </Link>
        </div>
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-6 ">
              <div className="card shadow mt--lg-5">
                <div className="card-header text-bg-primary mb-3">
                  <h5>Add Course</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="CourseTitle" className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="CourseTitle"
                        name="title"
                        placeholder="Enter Course Title"
                        value={title}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="CourseFees" className="form-label">Fees</label>
                      <input
                        type="text"
                        className="form-control"
                        id="CourseFees"
                        name="fees"
                        placeholder=" Enter Course Fees"
                        value={fees}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="CourseDuration" className="form-label">Duration (in months)</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control me-2"
                          id="CourseDuration"
                          name="duration"
                          placeholder="Enter Course Duration"
                          value={duration}
                          onChange={handleChange}
                        />                        
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="CourseDescription" className="form-label">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        id="CourseDescription"
                        placeholder="Enter Course Description"
                        value={description}
                        onChange={handleChange}
                      />
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
      <ToastContainer />
    </>
  );
}
