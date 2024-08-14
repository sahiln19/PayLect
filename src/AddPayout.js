import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import axios from "axios";
import Menu from "./Menu";

export default function AddPayout() {
  const [teachers, setTeachers] = useState([]);
  const [payout, setPayout] = useState({
    teacher_id: "",
    order_date: "",
    remarks: "",
    start_date: "",
    end_date: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const apiaddress = getBase() + "teacher";
    axios
      .get(apiaddress)
      .then(response => {
        console.log("API Response:", response.data); // Log the response data
        // Adjust based on the actual response format
        if (Array.isArray(response.data)) {
          setTeachers(response.data);
        } else if (response.data.teachers && Array.isArray(response.data.teachers)) {
          setTeachers(response.data.teachers);
        } else {
          showError("Unexpected data format from teachers API.");
          setTeachers([]); // Ensure teachers is an array
        }
      })
      .catch(error => {
        showError("Error loading teachers.");
        setTeachers([]); // Ensure teachers is an array
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayout({
      ...payout,
      [name]: value,
    });
  };

  const apiAddress = getBase() + "payout";
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(apiAddress, payout)
      .then(response => {
        showMessage("Payout added successfully");
        setTimeout(() => {
          navigate("/Payout");
        }, 1000);
      })
      .catch(error => {
        showError("Error adding payout");
      });
  };

  return (
    <>
      <Menu />
      <ToastContainer />
      <main id="main" className="main">
        <div className="d-flex justify-content- mb-2">
          <Link to="/Payout">
            <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
              <i className="fas fa-arrow-left"></i> Back
            </button>
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow mb-lg-5">
                <div className="card-header text-bg-primary mb-3">
                  <h5>Add Payout</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="TeacherId" className="form-label">Teacher</label>
                      <select
                        className="form-select"
                        id="teacher"
                        name="teacher_id"
                        value={payout.teacher_id}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a teacher</option>
                        {teachers.map((teacher) => (
                          <option key={teacher.id} value={teacher.id}>
                            {teacher.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="OrderDate" className="form-label">Order Date</label>
                      <input type="date" className="form-control" id="OrderDate" placeholder="Order Date" name="order_date" value={payout.order_date} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="Remarks" className="form-label">Remarks</label>
                      <input type="text" className="form-control" id="Remarks" placeholder="Remarks" name="remarks" value={payout.remarks} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="StartDate" className="form-label">Start Date</label>
                      <input type="date" className="form-control" id="StartDate" placeholder="Start Date" name="start_date" value={payout.start_date} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EndDate" className="form-label">End Date</label>
                      <input type="date" className="form-control" id="EndDate" placeholder="End Date" name="end_date" value={payout.end_date} onChange={handleChange} />
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
