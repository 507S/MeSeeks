import React from "react";

export default function TextAreaInput({
  name,
  labelName,
  textAreaInputRow,
  placeholder,
  onChange,
  ...rest
}) {
  return (
    <div class="mb-3 mt-3">
      <label for="exampleFormControlTextarea1" class="form-label ">
        {labelName}
      </label>
      <textarea
        name={name}
        class="form-control"
        id="exampleFormControlTextarea1"
        rows={textAreaInputRow}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
