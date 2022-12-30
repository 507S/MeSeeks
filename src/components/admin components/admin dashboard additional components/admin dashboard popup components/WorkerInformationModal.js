import React from "react";
import workerProfileImage from "../../../user components/user additional components/images/akib.jpg";
export default function WorkerInformationModal({
  workerGenre,
  workerAverageRating,
  workerTotalServices,
  // workerProfileImage,
  banDecisionText,
  workerAddress,
  workerPhoneNumber,
  workerName,
  modalClosingButtonText,
  modalClosingButtonIcon,

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
              <img
                src={workerProfileImage}
                alt="workerProfileImage"
                width="100%"
                height="50%"
              />
              {/* {workerGenre}&nbsp; */}
            </h5>
          </div>
          <div class="modal-body text" style={{ fontSize: "19px" }}>
            <i className="fa-solid fa-helmet-safety"></i>&nbsp; Name :{" "}
            {workerName} <br />
            <i className="fa-solid fa-briefcase"></i>&nbsp; Worker Category :{" "}
            {workerGenre}
            <br />
            <i className="fa-solid fa-phone"></i>&nbsp; Phone Number :{" "}
            {workerPhoneNumber}
            <br />
            <i class="fa-solid fa-star"></i>&nbsp; Average Rating:{" "}
            {workerAverageRating}
            <br />
            <i class="fa-solid fa-person-digging"></i>&nbsp; Service Completed :{" "}
            {workerTotalServices}
            <br />
            <i className="fa-solid fa-house"></i>&nbsp; Address :{" "}
            {workerAddress}
            <br />
          </div>
          <div class="modal-footer">
            {/* unban/ban button submit form */}
            {/* <form action="POST">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ backgroundColor: "black" }}
              >
                <i className="fa-solid fa-wrench"></i>&nbsp;{banDecisionText}
              </button>
            </form> */}

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
