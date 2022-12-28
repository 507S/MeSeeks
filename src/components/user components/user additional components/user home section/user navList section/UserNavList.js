import React from "react";
import { NavLink } from "react-router-dom";
import UserHomePageLogo from "../../images/userHomeNavLogo.png";
export default function UserNavList() {
  return (
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <NavLink
        to="/users/home"
        class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none "
      >
        <img
          src={UserHomePageLogo}
          alt="UserHomePageLogo"
          width="75px"
          height="75px"
        />
      </NavLink>
      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <NavLink to="/users/home" class="nav-link px-3 link-secondary">
            <h3
              style={{
                fontWeight: "lighter",
                color: "white",
                fontSize: "40px",
              }}
            >
              MeSeeks
            </h3>
          </NavLink>
        </li>
      </ul>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 mt-3">
        <p style={{ fontWeight: "lighter", fontSize: "40px" }}>
          <NavLink to="/users/home" style={{ color: "white" }}>
            Home
          </NavLink>
          &nbsp; &nbsp;
          <NavLink to="/users/services" style={{ color: "white" }}>
            Services
          </NavLink>
          &nbsp; &nbsp;
          <NavLink to="/users/submit-work" style={{ color: "white" }}>
            Request Service
          </NavLink>
          {/* <NavLink to="" style={{ color: "white" }}>
            About
          </NavLink> */}
          &nbsp; &nbsp;
          <NavLink
            className="btn btn-dark"
            to="/users/login"
            style={{ backgroundColor: "" }}
          >
            Log in
          </NavLink>
          &nbsp; &nbsp;
          <NavLink
            className="btn btn-dark"
            to="/users/registration"
            style={{ backgroundColor: "" }}
          >
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
}
