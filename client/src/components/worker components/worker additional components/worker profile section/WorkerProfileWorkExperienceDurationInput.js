import React from "react";
import "../../../../styles/global/worker global/WorkerProfileDynamicInputFieldStyle.css";

export default function WorkerProfileWorkExperienceDurationInput({
  labelName,

  inputName,
  inputType,
  minDateInCalender,
  maxDateInCalender,
  ...rest
}) {
  return (
    <>
      <div className="col">
        <label class="control-label" for="date">
          {labelName}
        </label>
        <input
          class="form-control"
          type={inputType}
          placeholder="MM-DD-YYYY "
          id=""
          name={inputName}
          value=""
          min={minDateInCalender}
          max={maxDateInCalender}
          {...rest}
        />
      </div>
    </>
  );
}
