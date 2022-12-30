import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/global/platform styles/platformSelection.css";

export default function LoginPlatformSelectionComponent() {
  return (
    <header
      style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div class="main-page" style={{ maxWidth: "1200px", margin: "auto" }}>
        <div class="company-logo"></div>
      </div>

      <div
        class="platform-selection"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2 style={{ color: "white", fontSize: "60px" }}>
          Choose your Platform
        </h2>
        <div className="position" style={{ margin: "15%" }}>
          <NavLink to="/users/home" style={{ marginRight: "10px" }}>
            <button type="button" class="btn btn-dark btn-lg">
              User Field
            </button>
          </NavLink>
          <NavLink to="/workers/login" style={{ marginRight: "10px" }}>
            <button type="button" class="btn btn-dark btn-lg">
              Worker Field
            </button>
          </NavLink>
          <NavLink to="/admin-dashboard">
            <button type="button" class="btn btn-dark btn-lg">
              Admin Field
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
