import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

export default function EditSubjects() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [subject, setSubject] = useState({
    course_id: "",
    title: "",
    rate: "",
  });
  const navigate = useNavigate();
  const apiAddress = getBase() + `subject/${id}`;
  useEffect(() => {
    
    axios.get(apiAddress)
      .then((response) => {
        setSubject(response.data);
      })
      .catch((error) => {
        showError("Failed to fetch subject data.");
      });
      

    const apis = getBase() + "course";
    axios.get(apis)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        showError("The courses couldn't fetch");
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubject({
      ...subject,
      [name]: value,
    });
  };
 const api2 = getBase() + `subject/${id}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(api2, subject)
      .then((response) => {
        showMessage("Subject updated successfully");
        setTimeout(() => {
          navigate("/Subjects");
        }, 2000);
      })
      .catch((error) => {
        showError("Failed to update subject");
      });
  };
    return (
        <>
        <Menu/>
 <main id="main" className="main">
 <div className="d-flex justify-content- mb-3">
           <Link to="/Subjects">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
 <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
  <div className="card shadow mt--lg-5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Edit Subject</h5>
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
       
        <div className="mb-3">
          <label htmlFor="Editcourse" className="form-label">Edit Course</label>
          <select
                    className="form-select"
                    id="Editcourse"
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
          <label htmlFor="EditsubjectTitle" className="form-label">Edit Title</label>
          <input type="text" className="form-control" id="EditsubjectTitle" placeholder="Edit Title" name="title" value={subject.title} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="EditsubjectRate" className="form-label">Edit Rate</label>
          <input type="text" className="form-control" id="EditsubjectRate" placeholder="Edit Rate" name="rate" value={subject.rate} onChange={handleChange} />
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
  <ToastContainer />
</main>

        </>
    );
    }