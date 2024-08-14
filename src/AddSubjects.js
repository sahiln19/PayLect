import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import Menu from "./Menu";

export default function AddSubjects() {
    const [courses, setCourses] = useState([]);
    const [subject, setSubject] = useState({
      course_id: "",
      title: "",
      rate: "",
    });
    const apiAddress = getBase() + "course";
    const navigate = useNavigate();
    useEffect(() => {
      axios.get(apiAddress)
        .then((response) => {
          setCourses(response.data);
        })
        .catch((error) => {
          showError("There was an error!", error);
        });
    } , []);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSubject({
        ...subject,
        [name]: value,
      });
    }
    const apiaddress = getBase() + "subject";
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(apiaddress, subject)
        .then((response) => {
          showMessage("Subject added successfully");
          setTimeout(() => {
            navigate("/Subjects");
          }, 1000);
        })
        .catch((error) => {
          showError("Failed to add subject");
        });
      }
    return (
      <>
      <Menu/>
<main id="main" className="main">
<div className="d-flex justify-content- mb-2">
         <Link to="/Subjects">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                <i className="fas fa-arrow-left"></i> Back
              </button> </Link>
            </div>
<div className="container">
  <div className="row justify-content-center">
  <div className="col-md-6 ">
<div className="card shadow mt--lg-5">
  <div className="card-header text-bg-primary mb-3">
    <h5>Add Subject</h5>
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
    
      <div className="mb-3">
        <label htmlFor="courseId" className="form-label">Course ID</label>
        <select
                    className="form-select"
                    id="course"
                    name="course_id"
                    value={subject.course_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
      </div>
      <div className="mb-3">
        <label htmlFor="subjectTitle" className="form-label">Title</label>
        <input type="text" className="form-control" id="subjectTitle" placeholder="Enter Title" name="title" value={subject.title} onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="subjectRate" className="form-label">Rate</label>
        <input type="text" className="form-control" id="subjectRate" placeholder="Enter Rate" name="rate" value={subject.rate} onChange={handleChange} />
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
  );
  }
