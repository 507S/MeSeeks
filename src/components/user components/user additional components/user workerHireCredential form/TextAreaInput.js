import React from "react";

export default function TextAreaInput({
  labelFor,
  labelName,
  labelIconClassName,
  textInputRow,
  name,

  onChange,
  type,
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
        name={name}
        type={type}
        onChange={onChange}
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
