import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  function toggleSidebar() {
    document.body.classList.toggle('toggle-sidebar');
  }

  return (
    <>
      <header id="header" className="header fixed-top d-flex align-items-center charcoal-header shadow-sm">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="#" className="logo d-flex align-items-center">
            <img src="/assets/img/mainLogo.png" alt="PayLect Logo" />
            <span className="d-none d-lg-block p-1 text-dark">PayLect</span>
          </Link>
          <i className="fas fa-bars toggle-sidebar-btn" onClick={toggleSidebar} />
        </div>
        {/* End Logo */}
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <Link to="/AdminProfile" className="nav-link nav-profile d-flex align-items-center pe-0 h2">
                <span className="d-none d-md-block text-dark m-2">Profile</span>
                <i title="Admin" className="fa-solid fa-user" />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <aside id="sidebar" className="sidebar bright-yellow-sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Dashboard">
              <i className="fas fa-table" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Courses">
              <i className="fas fa-layer-group" />
              <span>Courses</span>
            </Link>
          </li>
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Batches">
              <i className="fa-solid fa-people-group" />
              <span>Batches</span>
            </Link>
          </li>
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Subjects">
              <i className="fa-solid fa-book" />
              <span>Subjects</span>
            </Link>
          </li>
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Teachers">
              <i className="fa-solid fa-chalkboard-user" />
              <span>Teachers</span>
            </Link>
          </li>
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Lectures">
              <i className="fa-solid fa-sim-card" />
              <span>Lectures</span>
            </Link>
          </li>
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Payout">
              <i className="fa-solid fa-money-check-dollar" />
              <span>Payout</span>
            </Link>
          </li>
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Reports">
            <i className="fa-solid fa-list" />
              <span>Reports</span>
            </Link>
          </li>
          <li className="nav-item shadow-sm">
            <Link className="nav-link collapsed" to="/Logout">
              <i className="fa-solid fa-right-to-bracket" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
