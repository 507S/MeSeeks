import React from "react";

export default function AdminDashboardActionButton({
  adminActionButtonClassName,
  buttonType,
  adminActionButtonIcon,
  adminActionButtonText,
  onClick
}) {
  return (
    <button className={adminActionButtonClassName} type={buttonType} onClick={onClick}>
      {adminActionButtonText}
      
      &nbsp; <i className={adminActionButtonIcon}></i>
    </button>
  );
}
