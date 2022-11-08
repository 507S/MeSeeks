import React from "react";

export default function ModalButton({
  modalButtonText,
  modalButtonType,
  modalButtonClassName,
  modalPopUpButtonIcon,
  onClick,

  ...rest
}) {
  return (
    <button
      type={modalButtonType}
      class={modalButtonClassName}
      onClick={onClick}
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      {modalButtonText}&nbsp;<i className={modalPopUpButtonIcon}></i>
    </button>
  );
}
