import React from "react";
import AdminDashboardHeaderContentIcon from "./admin dashboard headerContentIcon Partials/AdminDashboardHeaderConentIcon";

export default function AdminDashboardHeaderContent({
  adminHeaderContentText,
}) {
  return (
    <>
      <h1 className="h2">
        <AdminDashboardHeaderContentIcon />
        &nbsp;{adminHeaderContentText}
      </h1>
    </>
  );
}
