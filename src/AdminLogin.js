import React, { useState } from 'react';
import getBase from "./api";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { showError, showMessage } from "./ToastMessage";
import { ToastContainer } from "react-toastify";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiAddress = getBase() + "Adminlogin";
        
        axios.post(apiAddress, {
            email: email,
            password: password
        }).then((response) => {
            const data = response.data;
            // Handle response based on error and success keys
            if (data.error === 'yes') {
                showError(data.message || "There was an error logging in!");
            } else if (data.success === 'yes') {
                showMessage("Login successful");
                setTimeout(() => {
                    navigate("/Dashboard");
                }, 2000);
            } else {
                showError("Unexpected response from server");
            }
        }).catch((error) => {
            console.log("Network Error:", error); // Log the error for debugging
            showError("Invalid email or password");
        });
    };

    return (
        <main>
            <div className="container">
                <ToastContainer />
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a href="index.html" className="d-flex align-items-center w-auto">
                                        <img src="./assets/img/mainLogo.png" className="m-1" alt="logo" height="64px" />
                                        <span className="d-none d-lg-block h2 text-dark">PayLect</span>
                                    </a>
                                </div>
                                <div className="card mb-5">
                                    <div className="card-body shadow">
                                        <div className="py-1 tttt mb-3">
                                            <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        </div>
                                        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
                                            <div className="col-12">
                                                <label htmlFor="Email" className="form-label">Email</label>
                                                <div className="input-group has-validation">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        id="Email"
                                                        placeholder="Enter your email address"
                                                        value={email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <div className="invalid-feedback">Please enter your email.</div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="yourPassword" className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    placeholder="Enter your password"
                                                    value={password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <div className="invalid-feedback">Please enter your password!</div>
                                                <p className="text-end">
                                                    <Link to="/AdminForgotPassword">Forgot password?</Link>
                                                </p>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100" type="submit">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
