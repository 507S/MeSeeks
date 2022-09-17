import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminDashboardSideBarNavList({
  sideBarNavListClassName,
  sideBarNavLinkClassName,
  sideBarNavListRedirectLink,
  sideBarNavListIconClassName,
  sideBarNavListText,
  ariaCurrent,
}) {
  return (
    <>
      <li className={sideBarNavListClassName}>
        <NavLink
          className={sideBarNavLinkClassName}
          style={{ color: "white" }}
          aria-current={ariaCurrent}
          to={sideBarNavListRedirectLink}
        >
          <i className={sideBarNavListIconClassName}></i>
          {sideBarNavListText}
        </NavLink>
      </li>
    </>
  );
}
