import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHomeSocialMediaLinkContent({
  socialMediaRedirectLink,
  socialMediaIconClassName,
  ...rest
}) {
  return (
    <li>
      <NavLink
        to={socialMediaRedirectLink}
        class={socialMediaIconClassName}
      ></NavLink>
    </li>
  );
}
