import React from "react";
// import WorkerDashboardHeaderContentIcon from "./worker dashboard headerContentIcon Partials/WorkerDashboardHeaderContentIcon";

export default function WorkerDashboardHeaderContent({
  adminHeaderContentText,
  workerDashboardHeaderContentImage,
}) {
  return (
    <>
      <h4 className="h4">
        {/* <WorkerDashboardHeaderContentIcon workerDashboardHeaderContentImage={workerDashboardHeaderContentImage} /> */}
        <i className={workerDashboardHeaderContentImage}></i>
        &nbsp;&nbsp;{adminHeaderContentText}
      </h4>
    </>
  );
}
