import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminEditProfile() {
    const [adminName, setAdminName] = useState("Edit Admin Name");

    return (
        <>
            <div className="position-absolute top-0 start-0 mt-3 ms-3">
                <Link to="/AdminProfile">
                    <button type="button" className="btn btn-secondary">
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                </Link>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header text-center">
                                <i className="fas fa-user-circle fa-7x" />
                                <label htmlFor="editAdminName" className="for"></label>
                                <input
                                    type="text"
                                    className="form-control text-center mt-3 mx-auto"
                                    value={adminName}
                                    onChange={(e) => setAdminName(e.target.value)}
                                    maxLength={16}
                                    style={{ maxWidth: '250px' }}
                                />
                                <p className="card-text mt-2">Administrator</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="adminEmail" className="form-label">Edit Email</label>
                                        <input type="email" className="form-control" id="adminEmail" defaultValue="Enter Email Address" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="adminPhone" className="form-label">Edit Phone</label>
                                        <input type="text" className="form-control" id="adminPhone" defaultValue="Enter Phone Number" />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary p-2">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
