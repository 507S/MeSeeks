import React from "react";

export default function UserAuthFormTextInputCredentials({
  className,
  type,
  name,
  placeholder,
  tabindex,
  ...rest
}) {
  return (
    <div className="form-input">
      <span>
        <i className={className} {...rest}></i>
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        tabindex={tabindex}
        required
      />
    </div>
  );
}
