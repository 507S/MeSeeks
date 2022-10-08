import React from "react";

export default function WorkerAuthFormTextInputCredentials({
  inputType,
  inputName,
  placeholder,
  inputFieldIconClassName,
  ...rest
}) {
  return (
    <div className="wrap-input">
      <input
        type={inputType}
        className="input"
        name={inputName}
        placeholder={placeholder}
        required
      />
      <span className="focus-input"></span>
      <span className="symbol-input">
        <i className={inputFieldIconClassName} aria-hidden="true"></i>
      </span>
    </div>
  );
}
