import React from "react";
import "../../../../styles/global/user global/aos.css";
import "../../../../styles/global/user global/font-awesome.min.css";
import "../../../../styles/global/user global/UserHomePageDesign.css";
import phoneNumber from "../images/call9.png";
import ratingIcon from "../images/rating3.png";
import toolBox from "../images/totalservices.png";
import workerProfileIcon from "../images/woker5.png";
import UserCarouselSection from "../user home section/carousel section/UserCarouselSection";
import UserHomeSectionFooter from "../user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "../user home section/user navList section/UserNavList";
import ModalButton from "../user popup components/ModalButton";
import WorkerInformationModal from "../user popup components/WorkerInformationModal";
import ActionButton from "../user workerHireCredential form/ActionButton";
export default function UserSiteWorkerListLayout() {
  return (
    <main>
      <header
        class="p-3  text-white fixed-top  "
        style={{ background: "#057a8d" }}
      >
        <div class="container mt-3">
          <UserNavList />
        </div>
      </header>
      <hr />
      <UserCarouselSection />

      <div class="container marketing">
        <h3
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginBottom: "10%",
            color: "#f1c111",
          }}
        >
          Available Workers
        </h3>
      </div>

      {/* worker hiring form

  */}

      <div className="container mt-7 ">
        <div class="card mt-3">
          <div class="card-header ">
            <h5>
              {/* //fetch from db */}
              Worker Name :{" Ahnaf akib"}
              <img
                src={workerProfileIcon}
                alt="workerProfileIcon"
                style={{ float: "right" }}
              />
            </h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">Profile Information</h5>
            <br />
            <p class="card-text" style={{ fontSize: "17.5px" }}>
              <img src={ratingIcon} alt="rateIcon" width="40px" height="40px" />
              {/* //fetch from db */}
              &nbsp; Average Rating : 2.88
              <br />
              <br />
              <img
                src={phoneNumber}
                alt="phoneIcon"
                width="40px"
                height="40px"
              />
              {/* //fetch from db */}
              &nbsp; Phone Number : 01306979578 <br /> <br />
              <img src={toolBox} alt="rateIcon" width="40px" height="40px" />
              {/* //fetch from db */}
              &nbsp; Completed Services : 33
            </p>
            <div className="row g-3">
              <form>
                <ActionButton
                  type="submit"
                  workerProfileActionButtonIcon="fa fa-check"
                  workerProfileActionButtonText="Confirm Hire "
                  btnClassName="btn btn-info w-100 "
                  // onClick={submitHandler}
                />
              </form>

              <ModalButton
                modalButtonText="More Information"
                modalButtonType="button"
                modalButtonClassName="btn btn-dark w-100 "
                modalPopUpButtonIcon="fa fa-info-circle"
              />
              <WorkerInformationModal
                //   {/* //fetch from db */}

                workerGenre="Plumber"
                workerAverageRating="2.88"
                workerPhoneNumber="01306989478"
                workerTotalServices="33"
                workerProfileImage=""
                workerAddress="Mirpur, Cantt. , Dhaka"
                workerName="Akib"
                modalClosingButtonText="Close"
                modalClosingButtonIcon="fa fa-close"
              />
            </div>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-header ">
            <h5>
              {/* //fetch from db */}
              Worker Name :{" Salman Ahsan"}
              <img
                src={workerProfileIcon}
                alt="workerProfileIcon"
                style={{ float: "right" }}
              />
            </h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">Profile Information</h5>
            <br />
            <p class="card-text" style={{ fontSize: "17.5px" }}>
              <img src={ratingIcon} alt="rateIcon" width="40px" height="40px" />
              {/* //fetch from db */}
              &nbsp; Average Rating : 2.88
              <br />
              <br />
              <img
                src={phoneNumber}
                alt="phoneIcon"
                width="40px"
                height="40px"
              />
              {/* //fetch from db */}
              &nbsp; Phone Number : 01306979578 <br /> <br />
              <img src={toolBox} alt="rateIcon" width="40px" height="40px" />
              {/* //fetch from db */}
              &nbsp; Completed Services : 33
            </p>
            <div className="row g-3">
              <form>
                <ActionButton
                  type="submit"
                  workerProfileActionButtonIcon="fa fa-check"
                  workerProfileActionButtonText="Confirm Hire "
                  btnClassName="btn btn-info w-100 "
                  // onClick={submitHandler}
                />
              </form>

              <ModalButton
                modalButtonText="More Information"
                modalButtonType="button"
                modalButtonClassName="btn btn-dark w-100 "
                modalPopUpButtonIcon="fa fa-info-circle"
              />
              <WorkerInformationModal
                //   {/* //fetch from db */}

                workerGenre="Plumber"
                workerAverageRating="2.88"
                workerPhoneNumber="01306989478"
                workerTotalServices="33"
                workerProfileImage=""
                workerAddress="Mirpur, Cantt. , Dhaka"
                workerName="Akib"
                modalClosingButtonText="Close"
                modalClosingButtonIcon="fa fa-close"
              />
            </div>
          </div>
        </div>
      </div>
      <UserHomeSectionFooter />
    </main>
  );
}
