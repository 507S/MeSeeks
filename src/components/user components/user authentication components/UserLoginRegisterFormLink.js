import React from "react";
import { NavLink } from "react-router-dom";

export default function UserLoginRegisterFormLink({
  linkQueryText,
  registrationLinkText,
  redirectLink,
}) {
  return (
    <div className="text-center mb-5" style={{ color: "#777" }}>
      {/* Don't have an account? */}
      {linkQueryText}
      <NavLink className="register-link" to={redirectLink}>
        &nbsp;{registrationLinkText}
      </NavLink>
    </div>
  );
}
