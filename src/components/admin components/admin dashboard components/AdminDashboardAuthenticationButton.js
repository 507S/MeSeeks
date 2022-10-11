import React from "react";

export default function AdminDashboardAuthenticationButton({
  buttonClassName,
  buttonType,
  buttonLogoClassName,
  buttonText,
  spaceInBetweenButtonAndText,
}) {
  return (
    <>
      <button class={buttonClassName} type={buttonType}>
        <i class={buttonLogoClassName}></i>
        {spaceInBetweenButtonAndText}
        {buttonText}
      </button>
    </>
  );
}
