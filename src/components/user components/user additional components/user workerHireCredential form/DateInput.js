import React from "react";
import "../../../../styles/global/worker global/WorkerProfileDynamicInputFieldStyle.css";

export default function DateInput({
  labelName,
  labelFor,

  labelIconClassName,
  name,
  type,
  onChange,
  minDateInCalender,
  maxDateInCalender,
  ...rest
}) {
  return (
    <>
      <div className="col">
        <label for={labelFor} className="form-label ">
          <h5>
            <i className={labelIconClassName}></i>&nbsp;{labelName}
          </h5>
        </label>
        <input
          class="form-control"
          type={type}
          placeholder="MM-DD-YYYY "
          id=""
          name={name}
          onChange={onChange}
          min={minDateInCalender}
          max={maxDateInCalender}
          {...rest}
        />
      </div>
    </>
  );
}
