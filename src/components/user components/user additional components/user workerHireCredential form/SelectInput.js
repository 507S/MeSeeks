import React from "react";

export default function SelectInput({
  selectNamesFetchedFromDatabase,
  labelName,
  labelIconClassName,
  labelFor,
  onChange,

  ...rest
}) {
  return (
    <div class="col-md-6">
      <label for={labelFor} class="form-label">
        <h5>
          <i className={labelIconClassName}></i>&nbsp;{labelName}
        </h5>
      </label>

      <select className="form-select">
        <option>{selectNamesFetchedFromDatabase}</option>
        {/* <option value="">Day</option>
        <option value="">Night</option> */}

        {/* <option>Mohakhali</option>

          <option>Mirpur</option> */}
      </select>
    </div>
  );
}
