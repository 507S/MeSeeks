import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHomePageLayout() {
  return (
    <>
      <h2>Welcome to Homepage</h2>
      <NavLink to="/Login">Click here to login</NavLink>
    </>
  );
}
