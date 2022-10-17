import React from "react";
// import workerDashboardHeaderContentImage from "../../../../assets/worker assets/images/dashboardFolder.png";

export default function WorkerDashboardHeaderContentIcon({
  workerDashboardHeaderContentImage,
}) {
  return (
    <>
      {/* <img
        src={workerDashboardHeaderContentImage}
        width="35px"
        height="35px"
        alt="workerDashboardHeaderContentImage"
      /> */}
      <i className={workerDashboardHeaderContentImage}></i>
    </>
  );
}
