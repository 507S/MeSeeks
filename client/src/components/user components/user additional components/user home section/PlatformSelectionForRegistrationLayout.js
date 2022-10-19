import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../styles/global/user global/PlatformSelectionDesignForRegistration.css";
export default function PlatformSelectionForRegistrationLayout() {
  return (
    <>
      <header className="headerRegister">
        <div class="main-page">
          <div class="company-logo"></div>
        </div>

        <div class="platform-selection">
          <h2>Platform Selection</h2>
          <NavLink to="/users/registration">
            <button type="button" class="btn btn-dark btn-lg">
              Register as a User
            </button>
            &nbsp;&nbsp;
          </NavLink>
          <NavLink to="/workers/registration">
            <button type="button" class="btn btn-dark btn-lg">
              Register as a Worker
            </button>
          </NavLink>
        </div>
      </header>
    </>
  );
}
