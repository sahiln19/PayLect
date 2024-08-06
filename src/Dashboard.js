import React from 'react';
import Menu from './Menu';
export default function Dashboard() {
  return (
   <>
   <Menu />
         <main id="main" className="main">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid mb-lg-5">
      <span className="h2 ps-2 mt-2"><i className="fas fa-table" /> Dashboard</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </div>
  </nav>
  <div className="container ">
    <h1 className="text-center">Welcome to Our Website</h1>
    <p className="lead text-center mb-2">Manage your educational resources efficiently with our comprehensive management system.</p>
  </div>
  <div className="container mt-4">
    {/* First row of cards */}
    <div className="row mb-4">
      <div className="col-md-2">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header bg-primary"><p className="text-light m-0">Total Cources</p></div>
          <div className="card-body ">
            <h5 className="card-title text-light ">10</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header  bg-primary"><p className="text-light m-0">Total Subjects</p></div>
          <div className="card-body">
            <h5 className="card-title text-light">50</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white  bg-primary mb-3">
          <div className="card-header  bg-primary"><p className="text-light m-0">Total Faculties</p></div>
          <div className="card-body">
            <h5 className="card-title text-light">8</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white  bg-primary mb-3">
          <div className="card-header  bg-primary"><p className="text-light m-0">Total Batches</p></div>
          <div className="card-body">
            <h5 className="card-title text-light">20</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header  bg-primary "><p className="text-light m-0">Total Lectures</p></div>
          <div className="card-body">
            <h5 className="card-title text-light">150</h5>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="card text-white bg-primary mb-3">
          <div className="card-header  bg-primary"><p className="text-light m-0">Total Feedbacks</p></div>
          <div className="card-body">
            <h5 className="card-title text-light">30</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  </>
  );
}