import React from "react";
import { NavLink } from "react-router-dom";
export default function AdminLoginRegisterRedirectLink({
  adminLoginRegisterRedirectLinkHeadline,
  adminLoginRegisterRedirectLinkText,
  adminLoginRegisterRedirectLink,
  ...rest
}) {
  return (
    <p class="login-wrapper-footer-text mt-5">
      {adminLoginRegisterRedirectLinkHeadline}
      <NavLink
        to={adminLoginRegisterRedirectLink}
        class="link-info"
        style={{ fontSize: "15.5px" }}
      >
        &nbsp;{adminLoginRegisterRedirectLinkText}
      </NavLink>
    </p>
  );
}
