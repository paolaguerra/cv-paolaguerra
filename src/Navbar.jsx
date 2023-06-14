import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink className="nav-item nav-link" to="/home">
                Home
              </NavLink>

              <NavLink className="nav-item nav-link" to="/work">
                Work
              </NavLink>

              <NavLink className="nav-item nav-link" to="/about">
                About
              </NavLink>

              <NavLink className="nav-item nav-link" to="/fun">
                Fun
              </NavLink>

              <NavLink className="nav-item nav-link" to="/contact">
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
