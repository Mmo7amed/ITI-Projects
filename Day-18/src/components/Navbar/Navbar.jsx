import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <>
    <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width={40} height={32} aria-hidden="true">
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">My Store</span>
          </NavLink>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink 
                to="/home" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                About
              </NavLink>
            </li>
          </ul>
        </header>
      </div>

    </>
  );
}

export default Navbar;
