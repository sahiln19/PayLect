import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import axios from "axios";
import Menu from "./Menu";

export default function EditTeachers() {
  const { id } = useParams(); // Get the teacher's ID from the URL
  const navigate = useNavigate();
  const [teacher, setTeacher] = useState({
    name: "",
    photo: "",
    mobile: "",
    email: "",
    gender: "",
    qualification: "",
    experience: "",
  });
  const [selectFile, setSelectFile] = useState(null);

  useEffect(() => {
    axios
      .get(getBase() + `teacher/${id}`)
      .then((response) => {
        if (response.data) {
          setTeacher(response.data);
        } else {
          showError("No data found for this teacher.");
        }
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
        showError("Failed to fetch teacher details!");
      });
  }, [id]);

  const handleChange = (e) =>{
    const { name, value } = e.target;
    setTeacher({
        ...teacher,
        [name]: value,
    });
}

const handlePhotoChange = (e) => {
  setSelectFile(e.target.files[0]); // Set the file for uploading
};


const handleSubmit = async (e) => {
  e.preventDefault();

  const apiAddress = getBase() + `teacher/${id}`;
  const formData = new FormData();

  // Populate form data
  formData.append("name", teacher.name || "");
  formData.append("mobile", teacher.mobile || "");
  formData.append("email", teacher.email || "");
  formData.append("gender", teacher.gender || "");
  formData.append("qualification", teacher.qualification || "");
  formData.append("experience", teacher.experience || "");

  if (selectFile) {
      formData.append("photo", selectFile);
  } else if (teacher.photo) {
      formData.append("photo", teacher.photo);
  }

  try {
      const response = await axios.put(apiAddress, formData);
      console.log("API Response:", response.data);
      if (response.data.success === "yes") {
          showMessage("Teacher updated successfully!");
          setTimeout(() => {
              navigate("/Teachers");
          }, 1000);
      } else {
          showError(response.data.message || "Failed to update teacher!");
      }
  } catch (error) {
      console.error("Error updating teacher:", error.response || error.message);
      showError("Failed to update teacher!");
  }
};


const imageUrl = teacher.photo || "default-image-url";

  return (
    <>
      <Menu />
      <ToastContainer />
      <main id="main" className="main">
        <div className="d-flex justify-content mb-3">
          <Link to="/Teachers">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.history.back()}
            >
              <i className="fas fa-arrow-left"></i> Back
            </button>
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow mb--lg-5">
                <div className="card-header text-bg-primary mb-3">
                  <h5>Edit Teacher</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="mb-3">
                      <label htmlFor="Editphoto" className="form-label">
                        Edit Photo
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="Editphoto"
                        accept="image/*"
                        onChange={handlePhotoChange}
                      />
                      {imageUrl && (
                     <img
                     src={imageUrl}  // URL from the fetched data
                       alt={teacher.photo}
                         style={{
                             width: "100px",
                             height: "100px",
                             borderRadius: "50%",
                             marginTop: "10px",
                              }}
                              />
                            )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EditTeacherName" className="form-label">
                        Edit Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="EditTeacherName"
                        placeholder="Edit Teacher Name"
                        name="name"
                        value={teacher.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EditTeacherMobile" className="form-label">
                        Edit Mobile
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="EditTeacherMobile"
                        placeholder="Edit Teacher Mobile Number"
                        name="mobile"
                        value={teacher.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EditTeacherEmail" className="form-label">
                        Edit Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="EditTeacherEmail"
                        placeholder="Edit Teacher Email Address"
                        name="email"
                        value={teacher.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EditTeacherGender" className="form-label">
                        Edit Gender
                      </label>
                      <select
                        className="form-control"
                        id="EditTeacherGender"
                        name="gender"
                        value={teacher.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EditTeacherQualification" className="form-label">
                        Edit Qualification
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="EditTeacherQualification"
                        placeholder="Edit Teacher Qualification"
                        name="qualification"
                        value={teacher.qualification}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="EditTeacherExperience" className="form-label">
                        Edit Experience
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="EditTeacherExperience"
                        placeholder="Edit Teacher Experience"
                        name="experience"
                        value={teacher.experience}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                      <button
                        type="submit"
                        className="btn btn-primary justify-content-between"
                      >
                        Submit
                      </button>
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
