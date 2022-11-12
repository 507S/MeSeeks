import React from "react";

export default function   TextInput({
  name,
  labelName,
  type,
  placeholder,
  onChange,
  ...rest
}) {
  return (
    <div class="mb-3 mt-3">
      <label for="exampleFormControlInput1" class="form-label">
        {labelName}
      </label>
      <input
        name={name}
        type={type}
        class="form-control"
        id="exampleFormControlInput1"
        placeholder={placeholder}
        onChange={onChange}
        // value={value}
      />
    </div>
  );
}
