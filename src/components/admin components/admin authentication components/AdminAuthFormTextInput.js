import React from "react";

export default function AdminAuthFormTextInput({
  labelName,
  inputType,
  inputName,
  placeholder,
  ...rest
}) {
  return (
    <div class="form-group mb-4">
      <label for="username">{labelName}</label>
      <input
        type={inputType}
        name={inputName}
        id="username"
        class="form-control"
        placeholder={"Enter Username"}
      />
    </div>
  );
}
