import React from "react";

export default function SelectAreaInput({
  selectName,
  labelName,

  ...rest
}) {
  return (
    <div class="form-group mt-3">
      <label for="exampleFormControlSelect1">{labelName}</label>
      <select
        class="form-control mt-2"
        name={selectName}
        id="exampleFormControlSelect1"
      >
        <option>Home & Office</option>
        <option>Construction Site</option>
        <option>Car Maintenance</option>
      </select>
    </div>
  );
}
