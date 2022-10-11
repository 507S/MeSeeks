import React from "react";

export default function AdminDashboardActionButton({
  adminActionButtonClassName,
  buttonType,
  adminActionButtonIcon,
  adminActionButtonText,
}) {
  return (
    <button className={adminActionButtonClassName} type={buttonType}>
      {adminActionButtonText}
      &nbsp; <i className={adminActionButtonIcon}></i>
    </button>
  );
}
