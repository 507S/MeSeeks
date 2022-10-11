import React from "react";

export default function AdminAuthFormButton({
  adminAuthButtonType,
  adminAuthButtonText,
  adminAuthButtonIconClassName,
  ...rest
}) {
  return (
    <button class="btn btn-block login-btn w-100" type={adminAuthButtonType}>
      {adminAuthButtonText}&nbsp;
      <i class={adminAuthButtonIconClassName}></i>
    </button>
  );
}
