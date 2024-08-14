import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import Menu from "./Menu";

export default function AddTeacher() {    
    const [teacher, setTeacher] = useState({
        name: "",
        photo: "",
        mobile: "",
        email: "",
        gender: "",
        qualification: "",
        experience: "",
    });

    const navigate = useNavigate();
    const apiaddress = getBase() + "teacher";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTeacher({
            ...teacher,
            [name]: value,
        });
    }

    const handleFileChange = (e) => {
        setTeacher({
            ...teacher,
            photo: e.target.files[0], // Get the file object
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", teacher.name);
        formData.append("mobile", teacher.mobile);
        formData.append("email", teacher.email);
        formData.append("gender", teacher.gender);
        formData.append("qualification", teacher.qualification);
        formData.append("experience", teacher.experience);

        // Ensure that a file is selected
        if (teacher.photo) {
            formData.append("photo", teacher.photo);
        } else {
            showError("Please select a photo.");
            return;
        }

        axios.post(apiaddress, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            showMessage("Teacher added successfully");
            setTimeout(() => {
                navigate("/Teachers");
            }, 1000);
        })
        .catch((error) => {
            showError("Failed to add Teacher");
        });
    }

    return (
        <>
            <Menu/>
            <ToastContainer />
            <main id="main" className="main">
                <div className="d-flex justify-content mb-3">
                    <Link to="/Teachers">
                        <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>
                            <i className="fas fa-arrow-left"></i> Back
                        </button>
                    </Link>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow mb--lg-5">
                                <div className="card-header text-bg-primary mb-3">
                                    <h5>Add Teacher</h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="TeacherName" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="TeacherName" placeholder="Teacher Name" name="name" value={teacher.name} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Photo</label>
                                            <input className="form-control" type="file" id="photo" accept="image/*" name="photo" onChange={handleFileChange} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="TeacherMobile" className="form-label">Mobile</label>
                                            <input type="number" className="form-control" id="TeacherMobile" placeholder="Teacher Mobile Number" name="mobile" value={teacher.mobile} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="TeacherEmail" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="TeacherEmail" placeholder="Teacher Email Address" name="email" value={teacher.email} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="TeacherGender" className="form-label">Gender</label>
                                            <select className="form-control" id="TeacherGender" name="gender" value={teacher.gender} onChange={handleChange}>
                                                <option value="">Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="TeacherQualification" className="form-label">Qualification</label>
                                            <input type="text" className="form-control" id="TeacherQualification" placeholder="Teacher Qualification" name="qualification" value={teacher.qualification} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="TeacherExperience" className="form-label">Experience</label>
                                            <input type="text" className="form-control" id="TeacherExperience" placeholder="Teacher Experience" name="experience" value={teacher.experience} onChange={handleChange} />
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
    )
}
