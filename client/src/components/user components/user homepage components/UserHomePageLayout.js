import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHomePageLayout() {
  return (
    <>
      <h2>Welcome to Homepage</h2>
      <NavLink to="/users-login">
        Click here to see user authentication pages
      </NavLink>
      <br />
      <NavLink to="/admin-dashboard">
        Click here to see admin dashboard pages
      </NavLink>
    </>
  );
}
