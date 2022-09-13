import React from "react";
import { NavLink } from "react-router-dom";

export default function UserForgetPasswordLink({
  redirectLink,
  className,
  linkText,
}) {
  return (
    <div className="text-center mb-2">
      <NavLink to={redirectLink} className={className}>
        {linkText}
      </NavLink>
    </div>
  );
}
