import React from "react";

export default function WorkerProfileTextInput({
  labelFor,
  labelName,
  textInputType,
  inputName,
  value,
  placeholder,
  ...rest
}) {
  return (
    <div class="col-md-6">
      <label for={labelFor} className="form-label ">
        <h5>{labelName}</h5>
      </label>
      <input
        type={textInputType}
        className="form-control"
        name={inputName}
        id="username"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
