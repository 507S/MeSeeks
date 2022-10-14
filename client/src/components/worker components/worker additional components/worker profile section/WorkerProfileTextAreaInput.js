import React from "react";

export default function WorkerProfileTextAreaInput({
  labelFor,
  labelName,
  textInputRow,
  inputName,
  value,
  placeholder,
  ...rest
}) {
  return (
    <div className="col-12">
      <label for={labelFor} style={{ fontWeight: "lighter" }}>
        <h5>{labelName}</h5>
      </label>
      <textarea
        name={inputName}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={textInputRow}
        style={{ resize: "none" }}
        placeholder={placeholder}
        {...rest}
      ></textarea>
    </div>
  );
}
