import React from "react";

export default function UserLoginCheckBoxLabel({ className, labelText }) {
  return (
    <label className={className} for="cb1">
      &nbsp;{labelText}
    </label>
  );
}
