import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import Menu from "./Menu";

export default function EditBatches() {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [batch, setBatch] = useState({
    batch_name: "",
    course_id: "",
    start_date: "",
    end_date: "",
    class_time: "",
  });
  const navigate = useNavigate();
  const apiAddress = getBase() + `batch/${id}`;

  useEffect(() => {
    axios.get(apiAddress)
      .then((response) => {
        // Format dates to match expected format
        const data = response.data;
        setBatch({
          ...data,
          start_date: formatDate(data.start_date),
          end_date: formatDate(data.end_date),
        });
      })
      .catch((error) => {
        showError("Failed to fetch batch data.");
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

  const formatDate = (dateString) => {
    // Convert date string to local date format
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Return 'YYYY-MM-DD'
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBatch({
      ...batch,
      [name]: value,
    });
  }

  const api2 = getBase() + `batch/${id}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(api2, batch)
      .then((response) => {
        showMessage("Batch updated successfully");
        setTimeout(() => {
          navigate("/Batches");
        }, 2000);
      })
      .catch((error) => {
        showError("Failed to update batch");
      });
  }

  return (
    <>
      <Menu/>
      <ToastContainer/>
      <main id="main" className="main">
        <div className="d-flex justify-content- mb-3">
          <Link to="/Batches">
            <button type="button" className="btn btn-secondary">
              <i className="fas fa-arrow-left"></i> Back
            </button>
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 ">
              <div className="card shadow mb--lg-5">
                <div className="card-header text-bg-primary mb-3">
                  <h5>Edit Batches </h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="edit batch_name" className="form-label">Edit Batch Name </label>
                    <input type="text" className="form-control" id="edit batch_name" placeholder="Edit Batch Name" name="batch_name" value={batch.batch_name} onChange={handleChange}/>
                   </div>
                    <div className="mb-3">
                      <label htmlFor="courseId" className="form-label">Course ID</label>
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
                      <label htmlFor="EditStartDate" className="form-label">Edit Start Date</label>
                      <input type="date" className="form-control" id="EditStartDate" name="start_date" value={batch.start_date} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EditEndDate" className="form-label">Edit End Date</label>
                      <input type="date" className="form-control" id="EndDate" name="end_date" value={batch.end_date} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EditClassTime" className="form-label">Edit Class Time</label>
                      <input type="time" className="form-control" id="EditClassTime" name="class_time" value={batch.class_time} onChange={handleChange} />
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
