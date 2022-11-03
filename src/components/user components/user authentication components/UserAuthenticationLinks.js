import React from "react";
import { NavLink } from "react-router-dom";

export default function UserAuthenticationLinks({
  redirectLink,
  className,
  authenticationLinkText,
}) {
  return (
    <>
      <NavLink to={redirectLink} className={className}>
        {authenticationLinkText}
      </NavLink>
    </>
  );
}
