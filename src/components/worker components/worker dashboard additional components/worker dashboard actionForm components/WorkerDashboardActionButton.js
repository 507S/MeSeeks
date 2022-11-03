import React from "react";

export default function AdminDashboardActionButton({
  adminActionButtonClassName,
  buttonType,
  adminActionButtonIcon,
  adminActionButtonText,
  ...rest
}) {
  return (
    <button className={adminActionButtonClassName} type={buttonType} {...rest}>
      {adminActionButtonText}
      &nbsp; <i className={adminActionButtonIcon}></i>
    </button>
  );
}
