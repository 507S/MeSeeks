import React from "react";
import WorkerDashboardHeaderContentIcon from "./worker dashboard headerContentIcon Partials/WorkerDashboardHeaderContentIcon";

export default function WorkerDashboardHeaderContent({
  adminHeaderContentText,
}) {
  return (
    <>
      <h4 className="h4">
        <WorkerDashboardHeaderContentIcon />
        &nbsp;{adminHeaderContentText}
      </h4>
    </>
  );
}
