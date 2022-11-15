import React from "react";
import userPhaseLoadingImage from "../../../assets/loading assets/user phase/wrench1.gif";
export default function UserLoaderLayout() {
  return (
    <div
      className="container"
      style={{ marginTop: "10%", textAlign: "center" }}
    >
      <h3>MeSeeks</h3>
      <img src={userPhaseLoadingImage} alt="userPhaseLoadingImage" />
      <h3>Loading...</h3>
    </div>
  );
}
