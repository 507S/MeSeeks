import React from "react";

export default function TextInput({
  labelName,
  type,
  inputName,
  placeholder,
  ...rest
}) {
  return (
    <div class="mb-3 mt-3">
      <label for="exampleFormControlInput1" class="form-label">
        {labelName}
      </label>
      <input
        type={type}
        class="form-control"
        name={inputName}
        id="exampleFormControlInput1"
        placeholder={placeholder}
      />
    </div>
  );
}
