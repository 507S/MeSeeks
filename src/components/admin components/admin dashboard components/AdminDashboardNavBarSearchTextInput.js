import React from "react";

export default function AdminDashboardNavBarSearchTextInput({
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
