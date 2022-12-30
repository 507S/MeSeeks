import React from "react";

export default function WorkerProfileImageChooseInput({
  imageInputFieldClassName,
  selectNamesFetchedFromDatabase,
  labelName,
  labelIconClassName,
  labelFor,
  inputType,
  inputName,
  accept,
  onChange,
  ...rest
}) {
  return (
    <div className={imageInputFieldClassName}>
      <label for={labelFor} class="form-label">
        <h5>
          <i className={labelIconClassName}></i>&nbsp;&nbsp;{labelName}
        </h5>
      </label>

      <input
        accept={accept}
        onChange={onChange}
        type={inputType}
        className="form-control"
        name={inputName}
        id="formFile"
        multiple
        {...rest}
      />
    </div>
    // <label for="formFile" class="form-label">Default file input example</label>
    // <input class="form-control" type="file" id="formFile">
  );
}
