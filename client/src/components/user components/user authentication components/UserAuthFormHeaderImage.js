import React from "react";
import companyLogo from "../../../assets/global assets/companyLogo.png";

export default function UserAuthFormHeaderImage() {
  return (
    // <!-- Company Logo -->
    <div className="text-center mb-3 mt-2">
      <img src={companyLogo} alt="projectLogo" style={{ width: "250px" }} />
    </div>
  );
}
