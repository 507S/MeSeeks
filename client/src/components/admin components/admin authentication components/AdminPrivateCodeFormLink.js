import React from "react";
import { NavLink } from "react-router-dom";
export default function AdminPrivateCodeFormLink({
  adminPrivateCodeFormLink,
  adminPrivateCodeFormLinkText,
  ...rest
}) {
  return (
    <NavLink
      to={adminPrivateCodeFormLink}
      class="link-info mb-4"
      style={{ textAlign: "center" }}
    >
      {adminPrivateCodeFormLinkText}
    </NavLink>
  );
}
