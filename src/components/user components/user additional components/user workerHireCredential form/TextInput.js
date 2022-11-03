import React from "react";

export default function TextInput({
  labelFor,
  labelName,
  labelIconClassName,
  type,
  name,

  onChange,
  placeholder,
  ...rest
}) {
  return (
    <div class="col-md-6">
      <label for={labelFor} className="form-label ">
        <h5>
          <i className={labelIconClassName}></i>&nbsp;{labelName}
        </h5>
      </label>
      <input
        type={type}
        className="form-control"
        name={name}
        onChange={onChange}
        id="username"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
