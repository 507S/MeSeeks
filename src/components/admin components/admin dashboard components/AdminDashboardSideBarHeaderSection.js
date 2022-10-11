import React from "react";
import { NavLink } from "react-router-dom";
import AdminSideBarHeaderSectionLogo from "./AdminSideBarHeaderSectionLogo";
export default function AdminDashboardSideBarHeaderSection({
  adminSideBarHeaderText,
}) {
  return (
    <NavLink
      className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
      style={{ fontSize: "20px" }}
      to="#"
    >
      <AdminSideBarHeaderSectionLogo />
      &nbsp;{adminSideBarHeaderText}
    </NavLink>
  );
}
