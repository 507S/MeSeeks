import React from "react";

export default function WorkerProfileActionButton({
  buttonType,
  workerProfileActionButtonIcon,
  workerProfileActionButtonText,
  ...rest
}) {
  return (
    <div className="col-12">
      <br />
      <button
        className="btn  w-25"
        type={buttonType}
        style={{ backgroundColor: "rgba(61, 248, 133, 0.976)", float: "right" }}
      >
        <i className={workerProfileActionButtonIcon}></i>{" "}
        {workerProfileActionButtonText}
      </button>
      {/* <!-- <button class="btn btn-lg" type="reset"><i class="glyphicon glyphicon-repeat"></i> Reset</button> --> */}
    </div>
  );
}
