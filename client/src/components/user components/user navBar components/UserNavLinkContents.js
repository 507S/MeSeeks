import React from "react";
import { NavLink } from "react-router-dom";

export default function UserNavLinkContents({
  userNavLinkText,
  userNavLink,
  ...rest
}) {
  return (
    <li class="nav-item">
      <NavLink to={userNavLink} class="nav-link smoothScroll">
        {userNavLinkText}
      </NavLink>
    </li>
  );
}
