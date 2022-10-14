import React from "react";

export default function UserAuthFormTextInputCredentials({
  className,
  type,
  name,
  placeholder,
  tabindex,
  onChange,
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
        onChange={onChange}
        required
      />
    </div>
  );
}
