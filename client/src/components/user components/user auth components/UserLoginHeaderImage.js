import React from "react";
import projectLogo from "../../../assets/global assets/projectLogo.png";

export default function UserLoginHeaderImage() {
  return (
    // <!-- Company Logo -->
    <div className="text-center mb-3 mt-5">
      <img src={projectLogo} alt="projectLogo" style={{ width: "150px" }} />
    </div>
  );
}
