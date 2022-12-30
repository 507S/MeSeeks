import React from "react";

export default function WorkerProfileTextAreaInput({
  labelFor,
  labelName,
  labelIconClassName,
  textInputRow,
  inputName,
  value,
  onChange,
  placeholder,
  ...rest
}) {
  return (
    <div className="col-12 ">
      <label for={labelFor} style={{ fontWeight: "lighter" }}>
        <h5>
          <i className={labelIconClassName}></i>&nbsp;{labelName}
        </h5>
      </label>
      <textarea
        name={inputName}
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={textInputRow}
        style={{ resize: "none" }}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      ></textarea>
    </div>
  );
}
