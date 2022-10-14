import React from "react";

export default function TextAreaInput({
  labelName,
  textAreaInputRow,
  inputName,
  value,
  placeholder,
  ...rest
}) {
  return (
    <div class="mb-3 mt-3">
      <label for="exampleFormControlTextarea1" class="form-label ">
        {labelName}
      </label>
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows={textAreaInputRow}
        placeholder={placeholder}
        name={inputName}
     {...rest}
      ></textarea>
    </div>
  );
}
