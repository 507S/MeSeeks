import React from "react";

export default function AdminDashboardNavBarTogglerButton({
  togglerIconClassName,
}) {
  return (
    <button
      className="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className={togglerIconClassName}></span>
    </button>
  );
}
