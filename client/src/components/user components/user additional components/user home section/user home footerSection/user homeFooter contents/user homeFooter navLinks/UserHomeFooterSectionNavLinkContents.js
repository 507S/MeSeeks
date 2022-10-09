import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHomeFooterSectionNavLinkContents({
  footerNavLinkText,
  footerNavLink,
  ...rest
}) {
  return (
    <li>
      <NavLink to={footerNavLink}>{footerNavLinkText}</NavLink>
    </li>
  );
}
