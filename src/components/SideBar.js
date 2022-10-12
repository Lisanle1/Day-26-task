import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#!"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Students</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Students-Details:</h6>
              <Link className="collapse-item" to="/create-students">
                Create students
              </Link>
              <Link className="collapse-item" to="/students-list">
                Students List
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#!"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Profile</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Profile-Details:</h6>
              <Link className="collapse-item" to="/register-profile">
                Register Profile
              </Link>
              <Link className="collapse-item" to="/view-profile">
                View Profile
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>

      {/* <!-- End of Sidebar --> */}
    </>
  );
}

export default SideBar;
