import React from "react";

export default function WorkerProfileSelectInput({
  selectNamesFetchedFromDatabase,
  labelName,
  labelFor,

  ...rest
}) {
  return (
    <div class="col-md-6">
      <label for={labelFor} class="form-label">
        <h5>{labelName}</h5>
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
