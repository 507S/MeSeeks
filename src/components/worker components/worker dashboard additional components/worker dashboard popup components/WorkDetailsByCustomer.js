import React from "react";

export default function WorkDetailsByCustomer({
  serviceTitle,
  serviceDescription,
  modalClosingButtonText,
  modalClosingButtonIcon,
  serviceTitleIcon,
  ...rest
}) {
  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              {serviceTitle}&nbsp;<i className={serviceTitleIcon}></i>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{serviceDescription}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {modalClosingButtonText}&nbsp;
              <i className={modalClosingButtonIcon}></i>
            </button>
            {/* <button type="button" class="btn btn-primary">
              Understood
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
