import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
export default function AddBatches() {
  const [courses, setCourses] = useState([]);
  const [batch, setBatch] = useState({
    batch_name: "",
    course_id: "",
    start_date: "",
    end_date: "",
    class_time: "",
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
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatch({
      ...batch,
      [name]: value,
    });
  };
  const apiaddress = getBase() + "batch";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiaddress, batch)
      .then((response) => {
        showMessage("Batch added successfully");
        setTimeout(() => {
          navigate("/Batches");
        }, 1000);
      })
      .catch((error) => {
        showError("Failed to add batch");
      });
    }
  return (
    <>
    <Menu/>
    <ToastContainer />
    <main id="main" className="main">
    <div className="d-flex justify-content- mb-2">
           <Link to="/Batches">     <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                  <i className="fas fa-arrow-left"></i> Back
                </button> </Link>
              </div>
    <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-6 ">
  <div className="card shadow mb-lg-5">
    <div className="card-header text-bg-primary mb-3">
      <h5>Add Batch </h5>
    </div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="batch_name" className="form-label">Batch Name </label>
          <input type="text" className="form-control" id="batch_name" placeholder="Batch Name" name="batch_name" value={batch.batch_name} onChange={handleChange}/>
        </div>
      <div className="mb-3">
          <label htmlFor="courseId" className="form-label">Course </label>
          <select
                    className="form-select"
                    id="course"
                    name="course_id"
                    value={batch.course_id}
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
          <label htmlFor="StartDate" className="form-label">Start Date</label>
          <input type="date" className="form-control" id="StartDate" placeholder="Start Date" name="start_date" value={batch.start_date} onChange={handleChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="End" className="form-label">End Date</label>
          <input type="date" className="form-control" id="EndDatel" placeholder="End Date" name="end_date" value={batch.end_date} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="ClassTime" className="form-label">Class Time</label>
          <input type="time" className="form-control" id="ClassTime" placeholder="Class Time" name="class_time" value={batch.class_time} onChange={handleChange}/>
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

