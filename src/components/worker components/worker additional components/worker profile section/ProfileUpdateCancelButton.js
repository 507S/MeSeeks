import React from "react";

export default function CancelButton({
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

      <button
        className={btnClassName}
        type={type}
        onClick={onClick}
        style={{ float: "" }}
      >
        <i className={workerProfileActionButtonIcon}></i>{" "}
        {workerProfileActionButtonText}
      </button>

      {/* </div> */}
      <h1 style={{ marginBottom: "0%" }}></h1>
    </>
  );
}
