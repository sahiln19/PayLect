import React from "react";
export default function AdminForgotPassword() {
    return (
        <>
        <main>
  <div className="container">
    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex justify-content-center py-4">
              <a href="#" className="d-flex align-items-center w-auto">
                <img src="./assets/img/logo2.png" className="m-1" alt height="64px" />
                <span className="d-none d-lg-block h2 text-dark"> PayLect</span>
              </a>
            </div>{/* End Logo */}
            <div className="card mb-3">
              <div className="card-body shadow-lg ">
                <div className="py-1 tttt mb-4">
                  <h5 className="card-title text-center pb-0 fs-4"> Forgot Password </h5>
                </div>
                <form className="row g-3 needs-validation" noValidate>
                  <div className="col-12">
                    <label htmlFor="NewPassword" className="form-label">New Password</label>
                    <div className="input-group">
                      <input type="password" name="Password" className="form-control" id="Pa" placeholder="Enter New Password" required />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="yourPassword" className="form-label">Confirm New Password</label>
                    <input type="password" name="password" className="form-control" id="yourPassword" placeholder="Enter Confirm New password" required />
                    <div className="invalid-feedback">Please enter your Confirm New password!</div>
                  </div>
                  <div className="col-12 ">
                   <button className="btn btn-primary w-100" type="submit">Save Changes</button>
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

         </>
    );
    }