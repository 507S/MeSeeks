import React from "react";

export default function WorkerForgetPasswordResetCodeTextInput({
  inputFieldIcon,
  inputFieldType,
  placeholder,
  inputName,
  ...rest
}) {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        <i className={inputFieldIcon}></i>
      </span>
      <input
        type={inputFieldType}
        className="form-control"
        placeholder={placeholder}
        name="resetPasswordCode"
        aria-label={inputName}
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
