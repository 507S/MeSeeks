import React from "react";

export default function ServiceDescriptionModal({
  serviceTitle,
  serviceDescription,
  modalClosingButtonText,
  modalClosingButtonIcon,
  serviceTitleIcon,
  id,
  source,
  ...rest
}) {
  return (
    <div
      class="modal fade"
      id={id}
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
              <img
                src={source}
                alt="workerProfileImage"
                width="100%"
                height="50%"
                // style={{}}
              />
                 {/* <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> */}
            </h5>
            {/* <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button> */}
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
