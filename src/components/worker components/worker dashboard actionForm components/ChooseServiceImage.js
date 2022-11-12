import React from "react";

export default function ChooseServiceImage({
  labelName,
  type,

  ...rest
}) {
  return (
    <div class="mb-3">
      <label for="formFileMultiple" class="form-label">
        {labelName}
      </label>
      <input class="form-control" type={type} id="formFileMultiple" multiple />
    </div>
  );
}
