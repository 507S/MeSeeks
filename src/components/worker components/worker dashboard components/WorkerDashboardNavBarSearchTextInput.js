import React from "react";

export default function WorkerDashboardNavBarSearchTextInput({
  className,
  inputType,
  placeholder,
  ...rest
}) {
  return (
    <>
      <input
        className={className}
        type={inputType}
        placeholder={placeholder}
        {...rest}
      ></input>
    </>
  );
}
