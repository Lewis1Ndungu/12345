import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={{ height: "7vh" }}>
        <a className="navbar-brand" href="#" style={{ color: "#FBA633" }}>
          <strong>ADOPT</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ paddingLeft: "30%" }}
          >
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">AboutUs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/adopt">Children</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/addpet"> AddChild</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
