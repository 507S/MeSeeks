import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../styles/global/user global/AuthSelectionDesign.css";
export default function AuthSelectionLayout() {
  return (
    <>
      <header className="headerAuthSelection">
        <div class="main-page">
          <div class="company-logo"></div>
        </div>

        <div class="platform-selection">
          <h2>Choose Authentication </h2>
          <NavLink to="/login-platform-selection">
            <button type="button" class="btn btn-dark btn-lg">
              Login Section
            </button>
            &nbsp;&nbsp;
          </NavLink>
          <NavLink to="/registration-platform-selection">
            <button type="button" class="btn btn-dark btn-lg">
              Registration section
            </button>
          </NavLink>
        </div>
      </header>
    </>
  );
}
