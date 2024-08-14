import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./ToastMessage";
import getBase from "./api";
import axios from "axios";
import { parseISO, format } from "date-fns";
import Menu from "./Menu";

export default function Payout() {
    const [payouts, setPayouts] = useState([]); // Initialize as an empty array

    useEffect(() => {
        let apiAddress = getBase() + "payout";
        axios.get(apiAddress)
            .then((response) => {
                console.log(response.data); // Debug: Log API response
                if (response.data && Array.isArray(response.data.payout)) {
                    // Sort payouts by id in ascending order
                    const sortedPayouts = response.data.payout.sort((a, b) => Number(a.id) - Number(b.id));
                    setPayouts(sortedPayouts); // Use the correct field from API response
                } else {
                    console.error("Unexpected data format:", response.data);
                    showError("The data format is incorrect");
                }
            })
            .catch((error) => {
                showError("There was an error!", error);
            });
    }, []);
    

    const DisplayPayout = (item) => {
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.teacher_name}</td> {/* Use teacher_name instead of teacher_id */}
                <td>{formatDate(item.order_date)}</td>
                <td>{item.remarks}</td>
                <td>{formatDate(item.start_date)}</td>
                <td>{formatDate(item.end_date)}</td>
               
            </tr>
        );
    };

 
    const formatDate = (dateString) => {
        const date = parseISO(dateString);
        return format(date, 'dd/MM/yyyy');
    };

    return (
        <>
            <Menu />
            <main id="main" className="main">
                <ToastContainer />
                <div className="mb-4 mt-3">
                    <h2>
                        <i className="fa-solid fa-sim-card" /> Payout
                    </h2>
                </div>
                <div className="card mt-4">
                    <div className="card-body shadow">
                        <div className="d-flex justify-content-end align-items-center mb-2 mt-3">
                            <Link title="Add Payout" to="/AddPayout">
                                <button className="btn btn-primary ">
                                    <i className="fas fa-plus m" /> Payout
                                </button>
                            </Link>
                        </div>
                        <div className="table-responsive mb-4">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Teacher </th> {/* Update column header */}
                                        <th>Order Date</th>
                                        <th>Remarks</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {payouts.length > 0 ? (
                                        payouts.map(item => DisplayPayout(item))
                                    ) : (
                                        <tr>
                                            <td colSpan="7" className="text-center">No payouts found</td>
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
