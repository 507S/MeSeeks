import React from "react";
import { NavLink } from "react-router-dom";
import WorkerSideBarHeaderSectionLogo from "./WorkerSideBarHeaderSectionLogo";
export default function WorkerDashboardSideBarHeaderSection({
  adminSideBarHeaderText,
}) {
  return (
    <NavLink
      className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
      style={{ fontSize: "20px" }}
      to="#"
    >
      &nbsp;
      <WorkerSideBarHeaderSectionLogo />
      &nbsp;{adminSideBarHeaderText}
    </NavLink>
  );
}
