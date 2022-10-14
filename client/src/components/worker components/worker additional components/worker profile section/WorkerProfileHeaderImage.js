import React from "react";
import profileHeaderImage from "../../../../assets/worker assets/images/profileHeaderImage.jpg";
export default function WorkerProfileHeaderImage() {
  return (
    <div>
      <img
        src={profileHeaderImage}
        width="100%"
        height="5%"
        style={{ margin: "none", padding: " none" }}
        alt="WorkerProfileHeaderImage"
      />
    </div>
  );
}
