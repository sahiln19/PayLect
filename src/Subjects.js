import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import axios from "axios";
import Menu from "./Menu";

export default function Subjects() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        let apiAddress = getBase() + "subject";
        axios.get(apiAddress)
            .then((response) => {
                console.log(response.data); // Debug: Log API response
                if (response.data && Array.isArray(response.data.subjects)) {
                    // Sort subjects by id in ascending order
                    const sortedSubjects = response.data.subjects.sort((a, b) => a.id - b.id);
                    setSubjects(sortedSubjects); // Use the correct field from API response
                } else {
                    console.error("Unexpected data format:", response.data);
                    showError("The data format is incorrect");
                }
            })
            .catch((error) => {
                showError("There was an error!", error);
            });
    }, []);
    

    const DisplaySubject = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.course_title}</td> {/* Use course_title instead of course_id */}
                <td>{item.title}</td>
                <td>{item.rate}</td>
                <td className="text-center">
                    <div className="btn-group" role="group">
                        <Link to={`/EditSubjects/${item.id}`} title="Edit Subject">
                            <button className="btn btn-primary btn-sm me-2">
                                <i className="fas fa-edit" />
                            </button>
                        </Link>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                            <i className="fas fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this subject?")) {
            const apiAddress = getBase() + `subject/${id}`;
            axios.delete(apiAddress)
                .then(() => {
                    showMessage("Subject deleted successfully");
                    setSubjects(subjects.filter((subject) => subject.id !== id));
                })
                .catch(() => {
                    showError("Failed to delete subject");
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
                        <i className="fa-solid fa-book mb-2" /> Subjects
                    </h2>
                </div>
                <div className="card mt-4">
                    <div className="card-body shadow">
                        <div className="d-flex justify-content-end align-items-center mb-2 mt-3">
                            <Link title="Add Subjects" to="/AddSubjects">
                                <button className="btn btn-primary">
                                    <i className="fas fa-plus" /> Subject
                                </button>
                            </Link>
                        </div>
                        <div className="table-responsive mb-4">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Course </th> {/* Update column header */}
                                        <th>Title</th>
                                        <th>Rate</th>
                                        <th style={{ width: '120px' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subjects.length > 0 ? (
                                        subjects.map(item => DisplaySubject(item))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center">No subjects found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
