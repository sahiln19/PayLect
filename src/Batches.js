import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import axios from "axios";
import { parseISO, format } from "date-fns";
import Menu from "./Menu";

export default function Batches() {
    const [batches, setBatches] = useState([]);

    useEffect(() => {
        let apiAddress = getBase() + "batch";
        axios.get(apiAddress)
            .then((response) => {
                console.log("API Response:", response.data); // Log the entire response
                if (response.data && response.data.batches && Array.isArray(response.data.batches)) {
                    setBatches(response.data.batches);
                } else {
                    showError("Invalid response format");
                }
            })
            .catch((error) => {
                showError("There was an error!", error.message);
            });
    }, []);

    const DisplayBatch = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.batch_name}</td>
                <td>{item.course_title}</td>
                <td>{formatDate(item.start_date)}</td>
                <td>{formatDate(item.end_date)}</td>
                <td>{item.class_time}</td>
                <td className="text-center">
                    <div className="btn-group" role="group">
                        <Link to={`/EditBatches/${item.id}`} title="Edit Batch">
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
        if (window.confirm("Are you sure you want to delete this batch?")) {
            const apiAddress = getBase() + `batch/${id}`;
            axios.delete(apiAddress)
                .then((response) => {
                    if (response.status === 200) {
                        showMessage("Batch deleted successfully");
                        setBatches(batches.filter((batch) => batch.id !== id));
                    }
                })
                .catch((error) => {
                    showError("Failed to delete batch");
                });
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) {
            return "N/A"; // Return a default value or empty string if dateString is null
        }

        try {
            const date = parseISO(dateString); // Parse ISO date string
            return format(date, 'dd/MM/yyyy'); // Format date as 'DD/MM/YYYY'
        } catch (error) {
            console.error("Error formatting date:", error);
            return "Invalid date"; // Return a default value or error message if date parsing fails
        }
    };

    return (
        <>
            <Menu />
            <main id="main" className="main">
                <ToastContainer />
                <div className="mb-4 mt-3">
                    <h2>
                        <i className="fa-solid fa-people-group" /> Batches
                    </h2>
                </div>
                <div className="card mt-4">
                    <div className="card-body shadow">
                        <div className="d-flex justify-content-end align-items-center mb-2 mt-3">
                            <Link title="Add Batches" to="/AddBatches">
                                <button className="btn btn-primary">
                                    <i className="fas fa-plus m" /> Batches
                                </button>
                            </Link>
                        </div>
                        <div className="table-responsive mb-4">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Batch Name</th>
                                        <th>Course</th> {/* Update column header */}
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Class Time</th>
                                        <th style={{ width: '120px' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {batches.length > 0 ? (
                                        batches.map(item => DisplayBatch(item))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center">No batches found</td>
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
