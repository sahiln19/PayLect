import React from "react";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function EditCourses() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [fees, setFees] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const apiAddress = getBase() + `course/${id}`;

  useEffect(() => {
    axios.get(apiAddress)
      .then((response) => {
        const course = response.data;
        setTitle(course.title);
        setFees(course.fees);
        setDuration(course.duration);
        setDescription(course.description);
      })
      .catch((error) => {
        showError("There was an error!", error);
      });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "fees") setFees(value);
    if (name === "duration") setDuration(value);
    if (name === "description") setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(apiAddress, {
        title,
        fees,
        duration,
        description,
      })
      .then((response) => {
          showMessage("Course updated successfully");
          setTimeout(() => {
            navigate("/Courses");
          }, 1000);
        }
      )
      .catch((error) => {
        showError("Failed to update course");
      });
  };
    return(
        <>
        <Menu/>
<main id="main" className="main">
<div className="d-flex justify-content- mb-3">
   <Link to="/Courses">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
    <i className="fas fa-arrow-left"></i> Back
    </button> </Link>
    </div>
<div className="container">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
    <div className="card shadow mt-lg--5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Edit Course</h5>
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="EditCourseTitle" className="form-label">Edit Title</label>
          <input type="text" className="form-control" id="EditCourseTitle" placeholder="Edit Course Title" name="title" value={title} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="EditCourseFees" className="form-label">Edit Fees</label>
          <input type="text" className="form-control" id="EditCourseFees" placeholder="Edit Course Fees"  name="fees" value={fees} onChange={handleChange}/>
        </div>
        <div className="mb-3">
           <label htmlFor="EditCourseDuration" className="form-label">Edit Duration (in days)</label>
              <div className="d-flex align-items-center">
                 <input
                  type="text"
                  className="form-control me-2"
                   id="EditCourseDuration"
                   name="duration"
                   placeholder="Edit Course Duration"
                   value={duration}
                   onChange={handleChange}
                        />                        
                </div>
           </div>
        <div className="mb-3">
          <label htmlFor="EditCourseDescription" className="form-label">Edit Description</label>
          <input type="text" className="form-control" id="EditCourseDescription"  placeholder="Edit Course Description "  name="description" value={description} onChange={handleChange}/>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-2">
          <button type="submit" className="btn btn-primary justify-content-between">Save Changes</button>
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
    )
}    