import React from "react";
import AdminDashboardHeaderContentIcon from "./admin dashboard headerContentIcon Partials/AdminDashboardHeaderContentIcon";

export default function AdminDashboardHeaderContent({
  adminHeaderContentText,
}) {
  return (
    <>
      <h4 className="h4">
        <AdminDashboardHeaderContentIcon />
        &nbsp;{adminHeaderContentText}
      </h4>
    </>
  );
}
