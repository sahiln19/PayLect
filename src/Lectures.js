import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError } from "./ToastMessage";
import axios from "axios";
import getBase from "./api";
import { parseISO, format } from "date-fns";
import Menu from "./Menu";

export default function Lectures() {
    const [lectures, setLectures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiAddress = getBase() + "lecture"; // Adjusted API endpoint
        axios.get(apiAddress)
            .then(response => {
                console.log(response.data); // Log the entire response data
                if (response.data && Array.isArray(response.data.lectures)) {
                    // Sort lectures by id in ascending order
                    const sortedLectures = response.data.lectures.sort((a, b) => a.id - b.id);
                    setLectures(sortedLectures);
                } else {
                    console.log("Unexpected data format:", response.data);
                    showError("The data format is incorrect");
                }
            })
            .catch(error => {
                console.log("Error fetching lectures:", error.response ? error.response.data : error.message);
                showError("There was an error fetching the lectures");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    

    const formatDate = (dateString) => {
        try {
            const date = parseISO(dateString);
            return format(date, "dd/MM/yyyy");
        } catch (error) {
            console.error('Date format error:', error);
            return 'Invalid date';
        }
    };

    const DisplayLecture = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.teacher_name}</td> {/* Display teacher name */}
                <td>{item.subject_title}</td> {/* Display subject title */}
                <td>{item.batch_name}</td> {/* Display batch name */}
                <td>{item.duration_start} to {item.duration_end}</td> {/* Updated for duration start and end */}
                <td>{item.amount}</td>
                <td>{formatDate(item.lecture_date)}</td>
                <td>{item.payout_remarks}</td> {/* Display payout remarks */}
            </tr>
        );
    };

    return (
        <>
            <Menu />
            <ToastContainer />
            <main id="main" className="main">
                <div className="mb-4 mt-3">
                    <h2><i className="fa-solid fa-sim-card" /> Lectures</h2>
                </div>
                <div className="card mt-4">
                    <div className="card-body shadow">
                        <div className="d-flex justify-content-end align-items-center mb-2 mt-3">
                            <Link title="Add Lectures" to="/AddLectures">
                                <button className="btn btn-primary">
                                    <i className="fas fa-plus m" /> Lecture
                                </button>
                            </Link>
                        </div>
                        <div className="table-responsive mb-4">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Teacher Name</th> {/* Updated header */}
                                        <th>Subject Title</th> {/* Updated header */}
                                        <th>Batch Name</th> {/* Updated header */}
                                        <th>Duration</th> {/* Updated header */}
                                        <th>Amount</th>
                                        <th>Lecture Date</th>
                                        <th>Payout Remarks</th> {/* Updated header */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr><td colSpan="8">Loading...</td></tr>
                                    ) : lectures.length > 0 ? (
                                        lectures.map(item => DisplayLecture(item))
                                    ) : (
                                        <tr><td colSpan="8">No lectures found</td></tr>
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
