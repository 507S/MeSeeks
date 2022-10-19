import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../styles/global/user global/PlatformSelectionDesignForLogin.css";
export default function PlatformSelectionForLoginLayout() {
  return (
    <>
      <header className="headerForLogin">
        <div class="main-page">
          <div class="company-logo"></div>
        </div>

        <div class="platform-selection">
          <h2>Platform Selection</h2>
          <NavLink to="/users/login">
            <button type="button" class="btn btn-dark btn-lg">
              Login as a User
            </button>
            &nbsp;&nbsp;
          </NavLink>
          <NavLink to="/workers/login">
            <button type="button" class="btn btn-dark btn-lg">
              Login as a Worker
            </button>
          </NavLink>
        </div>
      </header>
    </>
  );
}
