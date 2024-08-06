import React from "react";
import { Link } from "react-router-dom";

export default function AdminProfile() {
    return (
        <div className="container mt-lg-5 ">
            <div className="position-absolute top-0 start-0 mt-3 ms-3">
                <Link to="/Dashboard">
                    <button type="button" className="btn btn-secondary">
                        <i className="fas fa-arrow-left"></i> Back
                    </button>
                </Link>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-4 shadow-lg">
                        <div className="card-header text-center">
                            <i className="fas fa-user-circle fa-7x" />
                            <h5 className="card-title mt-3">Admin Name</h5>
                            <p className="card-text">Administrator</p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Personal Details</h5>
                            <p className="card-text"><strong>Email:</strong> admin@gmail.com</p>
                            <p className="card-text"><strong>Phone:</strong> +123 456 7890</p>
                        </div>
                        <div className="card-header justify-content-center text-center">
                            <Link to="/AdminEditProfile" className="btn btn-primary">Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
