import React from "react";
import profileSideImage from "../../../../assets/worker assets/images/profileSideImage.png";
export default function WorkerProfileFormSideImage() {
  return (
    <>
      <div className="text-center" style={{ margin: "10%" }}>
        <img
          src={profileSideImage}
          className="avatar img-circle img-thumbnail rounded-circle"
          alt="profileSideImage"
        />
        {/* <h5></h5> */}
      </div>
      <hr />
      <br />
    </>
  );
}
