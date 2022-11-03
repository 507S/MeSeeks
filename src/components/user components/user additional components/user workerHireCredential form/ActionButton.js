import React from "react";
import { NavLink } from "react-router-dom";

export default function ActionButton({
  type,
  workerProfileActionButtonIcon,
  workerProfileActionButtonText,
  btnClassName,
  onClick,
  ...rest
}) {
  return (
    <>
      {/* <div className="col-md-6"> */}
      <br />
      <NavLink to="/users/worker-list">
        <button
          className={btnClassName}
          type={type}
          onClick={onClick}
          style={{ float: "" }}
        >
          <i className={workerProfileActionButtonIcon}></i>{" "}
          {workerProfileActionButtonText}
        </button>
      </NavLink>
      {/* </div> */}
      <h1 style={{ marginBottom: "0%" }}></h1>
    </>
  );
}
