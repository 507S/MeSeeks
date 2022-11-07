import React from "react";

export default function ChooseServiceImage({
  labelName,
  type,
  name,
  accept,
  onChange,
  ...rest
}) {
  return (
    <div class="mb-3">
      <label for="formFileMultiple" class="form-label">
        {labelName}
      </label>
      <input class="form-control" name={name} accept={accept} type={type} onChange={onChange} id="formFileMultiple" multiple />
    </div>
  );
}
