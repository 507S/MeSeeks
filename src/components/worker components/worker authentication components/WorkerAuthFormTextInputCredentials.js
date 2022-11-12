import React from "react";

export default function WorkerAuthFormTextInputCredentials({
  type,
  name,
  placeholder,
  inputFieldIconClassName,
  onChange,
  ...rest
}) {
  return (
    <div className="wrap-input">
      <input
        type={type}
        className="input"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
      <span className="focus-input"></span>
      <span className="symbol-input">
        <i className={inputFieldIconClassName} aria-hidden="true"></i>
      </span>
    </div>
  );
}
