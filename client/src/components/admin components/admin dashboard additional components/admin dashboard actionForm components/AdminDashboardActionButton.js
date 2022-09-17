import React from "react";

export default function AdminDashboardActionButton({
  adminActionButtonClassName,
  buttonType,
  adminActionButtonIcon,
  adminActionButtonText,
}) {
  return (
    <button className={adminActionButtonClassName} type={buttonType}>
      <i className={adminActionButtonIcon}></i>&nbsp;{adminActionButtonText}
    </button>
  );
}
