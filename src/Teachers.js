import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import axios from "axios";
import Menu from "./Menu";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const apiaddress = getBase() + "teacher";
    axios
      .get(apiaddress)
      .then(response => {
        const data = response.data;
        let sortedTeachers = [];
        
        if (Array.isArray(data)) {
          sortedTeachers = data.sort((a, b) => a.id - b.id);
        } else if (data.teachers && Array.isArray(data.teachers)) {
          sortedTeachers = data.teachers.sort((a, b) => a.id - b.id);
        } else {
          showError("Unexpected data format");
        }

        setTeachers(sortedTeachers); // Set sorted data
      })
      .catch(error => {
        showError("Error loading teachers.");
        setTeachers([]); // Ensure teachers is an array
      });
  }, []);


  const DisplayTeacher = (item) => {
    const imageUrl = item.photo; // Directly use the URL from Cloudinary
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td style={{ textAlign: 'center' }}>
          <span style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '55px', 
            width: '60px',
            overflow: 'hidden'
          }}>
            <img
              src={imageUrl}
              alt={item.name}
              style={{ 
                maxWidth: "80px",     
                maxHeight: "70px",    
                width: "auto",         
                height: "auto",         
                objectFit: "contain" 
              }}
            />
          </span>
        </td>
        <td>{item.name}</td>
        <td>{item.mobile}</td>
        <td>{item.email}</td>
        <td>{item.gender}</td>
        <td>{item.qualification}</td>
        <td>{item.experience}</td>
        <td>
          <Link to={`/EditTeachers/${item.id}`} title="Edit Teacher"> 
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
    if (window.confirm("Are you sure you want to delete?")) {
      const apiaddress = getBase() + "teacher/" + id;
      axios
        .delete(apiaddress)
        .then((response) => {
          showMessage("Teacher deleted successfully.");
          setTeachers(teachers.filter((item) => item.id !== id));
        })
        .catch((error) => {
          showError("Error deleting teacher.");
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
            <i className="fa-solid fa-chalkboard-user mb-2" /> Teachers
          </h2>
        </div>
        <div className="card mt-4">
          <div className="card-body shadow">
            <div className="d-flex justify-content-end align-items-center mb-2 mt-3">
              <Link title="Add Teacher" to="/AddTeachers">
                <button className="btn btn-primary">
                  <i className="fas fa-plus" /> Teacher
                </button>
              </Link>
            </div>
            <div className="table-responsive mb-4">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Qualification</th>
                    <th>Experience</th>
                    <th style={{ width: '120px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teachers.map((item) => DisplayTeacher(item))} {/* Fixed typo here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
