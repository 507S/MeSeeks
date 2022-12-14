import React from "react";

export default function WorkerAuthFormButton({
  workerAuthFormButtonText,
  workerAuthFormButtonIconClassName,
  workerAuthFormButtonType,
  onClick,
  ...rest
}) {
  return (
    <div className="login-form-btn-container">
      <button className="login-form-btn" type={workerAuthFormButtonType} onClick={onClick}>
        {workerAuthFormButtonText}&nbsp;&nbsp;
        <i className={workerAuthFormButtonIconClassName}></i>
      </button>
    </div>
  );
}
