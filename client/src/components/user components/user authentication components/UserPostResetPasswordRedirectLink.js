import React from "react";
import { NavLink } from "react-router-dom";
import UserAuthFormButton from "./UserAuthFormButton";

export default function UserPostResetPasswordRedirectLink() {
  return (
    <NavLink to="/Login">
      <UserAuthFormButton type="submit" buttonText="Login Now" />
    </NavLink>
  );
}
