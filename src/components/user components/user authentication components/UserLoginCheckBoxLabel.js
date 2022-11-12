import React from "react";

export default function UserLoginCheckBoxLabel({
  className,
  labelText,
  onChange,
}) {
  return (
    <label className={className} for="cb1">
      &nbsp;{labelText}
      {onChange}
    </label>
  );
}
