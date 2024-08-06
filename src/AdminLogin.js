import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
export default function AdminLogin() {
 
  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <ToastContainer />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="d-flex align-items-center w-auto">
                    <img src="./assets/img/logo2.png" className="m-1" alt="logo" height="64px" />
                    <span className="d-none d-lg-block h2 text-dark"> PayLect</span>
                  </a>
                </div>{/* End Logo */}
                <div className="card mb-5">
                  <div className="card-body shadow">
                    <div className="py-1 tttt mb-3">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    </div>
                    <form className="row g-3 needs-validation" >
                      <div className="col-12">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <div className="input-group has-validation">
                          <input type="email" name="Email" className="form-control" id="Email" placeholder="Enter your email address" required />
                          <div className="invalid-feedback">Please enter your email.</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="yourPassword" placeholder="Enter your password" required />
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
