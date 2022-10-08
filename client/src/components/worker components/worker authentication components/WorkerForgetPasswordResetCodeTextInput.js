import React from "react";

export default function WorkerForgetPasswordResetCodeTextInput({
  inputFieldIcon,
  inputFieldType,
  placeholder,
  inputName,
  ...rest
}) {
  return (
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        <i class={inputFieldIcon}></i>
      </span>
      <input
        type={inputFieldType}
        class="form-control"
        placeholder={placeholder}
        name="resetPasswordCode"
        aria-label={inputName}
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
