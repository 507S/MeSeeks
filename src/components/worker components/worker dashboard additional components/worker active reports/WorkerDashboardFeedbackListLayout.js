import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import clockImage from "../../../../assets/worker assets/images/clock.png";
import feedbackimage from "../../../../assets/worker assets/images/feedback.png";
import userImage from "../../../../assets/worker assets/images/user.png";
import classes from "../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../styles/global/admin global/bootstrap.min.css";
import ModalButton from "../../../admin components/admin dashboard additional components/admin dashboard popup components/ModalButton";
import WorkerDashboardSideBarNavListPartials from "../../worker dashboard components/worker sideBarNavList partials/WorkerDashboardSideBarNavListPartials";
import WorkerDashboardAuthenticationButton from "../../worker dashboard components/WorkerDashboardAuthenticationButton";
import WorkerDashboardHeaderContent from "../../worker dashboard components/WorkerDashboardHeaderContent";
import WorkerDashboardNavBarTogglerButton from "../../worker dashboard components/WorkerDashboardNavBarTogglerButton";
import WorkerDashboardSideBarHeaderSection from "../../worker dashboard components/WorkerDashboardSideBarHeaderSection";
import WorkerDashboardSideBarNavListEndSection from "../../worker dashboard components/WorkerDashboardSideBarNavListEndSection";
import WorkDescriptionModal from "../worker dashboard popup components/WorkDescriptionModal";
export default function WorkerDashboardFeedbackListLayout() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <WorkerDashboardSideBarHeaderSection adminSideBarHeaderText="MeSeeks" />
        <WorkerDashboardNavBarTogglerButton togglerIconClassName="navbar-toggler-icon" />
        {/* <WorkerDashboardNavBarSearchForm action="">
          <WorkerDashboardNavBarSearchTextInput
            className="form-control mr-sm-2"
            inputType="search"
            placeholder="Search"
            aria-label="Search"
          />
        </WorkerDashboardNavBarSearchForm> */}
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <WorkerDashboardAuthenticationButton
              buttonClassName="btn btn-dark px-3"
              buttonType="submit"
              buttonLogoClassName="fa fa-sign-out"
              buttonText="Logout"
              spaceInBetweenButtonAndText="&nbsp;"
            />
          </div>
        </div>
      </header>

      {/* // header ends */}

      <div className="container-fluid">
        <div className="row">
          {/* //sidebar starts */}
          <nav
            id={classes["sidebarMenu"]}
            className="col-md-2 col-sm-2 d-md-block  sidebar-sticky  "
            // style={{ backgroundColor: " #91b5e7" }}
            style={{ backgroundColor: " #2ab7ca" }}
            // style={{ backgroundColor: "#91b5e7" }}
          >
            <div className="position-absolute pt-3">
              <ul className="nav flex-column">
                {/* //sidebarNavlist starts */}
                <WorkerDashboardSideBarNavListPartials />

                <WorkerDashboardSideBarNavListEndSection />
              </ul>
            </div>
          </nav>

          {/* //main section starts */}

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              {/* //button test */}

              <WorkerDashboardHeaderContent
                adminHeaderContentText="Customer Feedback"
                workerDashboardHeaderContentImage="fa-solid fa-chart-line"
              />

              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            <div class="card w-100" style={{ height: "auto" }}>
              <div class=" card-body" style={{ width: "100%", height: "auto" }}>
                <form method="POST">
                  <div class="row">
                    <div class="col">
                      <label class="control-label" for="date">
                        From :{" "}
                      </label>

                      <i
                        class="bx bxs-calendar"
                        style={{ float: "right " }}
                      ></i>
                      <input
                        class="form-control"
                        type="date"
                        placeholder="MM-DD-YYYY "
                        id="start"
                        name="start_date"
                        // value=""
                        min="2020-01-01"
                        max="2050-01-01"
                      />
                    </div>
                    <div class="col">
                      <label class="control-label" for="date">
                        To :
                      </label>

                      <i
                        class="bx bxs-calendar"
                        style={{ float: "right " }}
                      ></i>
                      <input
                        class="form-control"
                        type="date"
                        placeholder="MM-DD-YYYY"
                        id="start"
                        name="end_date"
                        // value=""
                        min="2020-01-01"
                        max="2050-01-01"
                      />
                    </div>
                  </div>

                  <div
                    class="col-md-4 col-lg-2"
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      float: "none",
                      marginBottom: " 10px",
                    }}
                  >
                    <button
                      class="btn btn-info mt-3"
                      style={{ marginTop: "10px", width: "100%" }}
                      name="search"
                      type="submit"
                    >
                      Show Feedbacks{" "}
                      <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* data are shown wrapped in following listed-cards */}
            <div class="card mt-5">
              <div class="card-header ">
                <div className="row">
                  <div class="col-sm">
                    {/* fetched customer name */}
                    <h5>
                      From : Sivan Alam{" "}
                      <img
                        src={userImage}
                        alt="userImage"
                        width="32px"
                        height="32px"
                      />{" "}
                    </h5>
                  </div>
                  <div class="col-sm">
                    {/* fetched send date */}
                    <h5 style={{ float: "right" }}>
                      <img
                        src={clockImage}
                        alt="clockImage"
                        width="32px"
                        height="32px"
                      />{" "}
                      Time : 03:77:80
                    </h5>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Feedback{" "}
                  <img
                    src={feedbackimage}
                    alt="clockImage"
                    width="32px"
                    height="32px"
                  />{" "}
                </h5>
                <p class="card-text">
                  {/* fetched feedback here */}
                  Feedback is a way to let people know how effective they are in
                  what they are trying to accomplish, or how they affect you. It
                  provides a way for people to learn how they affect the world
                  around them, and it helps us to become more effective. If we
                  know how other people see us, we can overcome problems in how
                  we communicate and interact with them. Of course, there are
                  two sides to it: giving feedback, and receiving it
                </p>
                <div className="row">
                  <div class="col-sm">
                    <button type="input" class="btn btn-info">
                      {/* fetched rating here */}
                      Rating :{" 4.55"}
                      &nbsp;<i className="fa fa-star"></i>
                    </button>
                  </div>

                  <ModalButton
                    modalButtonText=" Work Description"
                    modalButtonType="button"
                    modalButtonClassName="btn btn-dark w-25 "
                    modalPopUpButtonIcon="fa fa-info-circle"
                  />
                  <WorkDescriptionModal
                    serviceTitle=""
                    serviceTitleIcon="fa fa-wrench"
                    serviceDescription="Fixation of water pipe"
                    modalClosingButtonText="Close"
                    modalClosingButtonIcon="fa fa-close"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
