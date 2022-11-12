import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import clockImage from "../../../../../assets/worker assets/images/clock.png";
import feedbackimage from "../../../../../assets/worker assets/images/feedback.png";
import userImage from "../../../../../assets/worker assets/images/user.png";
import classes from "../../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../../styles/global/admin global/bootstrap.min.css";
import WorkerInformationModal from "../../../../admin components/admin dashboard additional components/admin dashboard popup components/WorkerInformationModal";
import ModalButton from "../../../../worker components/worker dashboard additional components/worker dashboard popup components/ModalButton";
import AdminDashboardSideBarNavListPartials from "../../../admin dashboard components/admin sideBarNavList partials/AdminDashboardSideBarNavListPartials";
import AdminDashboardAuthenticationButton from "../../../admin dashboard components/AdminDashboardAuthenticationButton";
import AdminDashboardHeaderContent from "../../../admin dashboard components/AdminDashboardHeaderContent";
import AdminDashboardNavBarSearchForm from "../../../admin dashboard components/AdminDashboardNavBarSearchForm";
import AdminDashboardNavBarSearchTextInput from "../../../admin dashboard components/AdminDashboardNavBarSearchTextInput";
import AdminDashboardNavBarTogglerButton from "../../../admin dashboard components/AdminDashboardNavBarTogglerButton";
import AdminDashboardSideBarHeaderSection from "../../../admin dashboard components/AdminDashboardSideBarHeaderSection";
import AdminDashboardSideBarNavListEndSection from "../../../admin dashboard components/AdminDashboardSideBarNavListEndSection";
import { useEffect, useState } from "react";
export default function AdminDashboardWorkerAppealMessageLayout() {
  const [getServicedata, setServicedata] = useState([])
  useEffect(() => {
    fetch("http://localhost:8003/api/worker/getappealmsg").then(res => {
      return res.json();
    }).then(jsonResponse => setServicedata(jsonResponse));
  }, []);
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <AdminDashboardSideBarHeaderSection adminSideBarHeaderText="MeSeeks" />
        <AdminDashboardNavBarTogglerButton togglerIconClassName="navbar-toggler-icon" />
        <AdminDashboardNavBarSearchForm action="">
          <AdminDashboardNavBarSearchTextInput
            className="form-control mr-sm-2"
            inputType="search"
            placeholder="Search"
            aria-label="Search"
          />
        </AdminDashboardNavBarSearchForm>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <AdminDashboardAuthenticationButton
              buttonClassName="btn btn-dark px-3"
              buttonType="submit"
              buttonLogoClassName="bx bx-log-out-circle"
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
            className="col-md-3 col-lg-2 d-md-block  bg-dark sidebar-sticky "
          >
            <div className="position-absolute pt-3">
              <ul className="nav flex-column">
                {/* //sidebarNavlist starts */}
                <AdminDashboardSideBarNavListPartials />

                <AdminDashboardSideBarNavListEndSection />
              </ul>
            </div>
          </nav>

          {/* //main section starts */}

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              {/* //button test */}
              <AdminDashboardHeaderContent adminHeaderContentText="Appeal Messages" />
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            <div class="card w-100" style={{ height: "auto" }}>
              <div class=" card-body" style={{ width: "100%", height: "auto" }}>
                <form method="GET">
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
                      Show Appeal Messages{" "}
                      <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* data are shown wrapped in following listed-cards */}
<<<<<<< HEAD
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
                  Message{" "}
                  <img
                    src={feedbackimage}
                    alt="clockImage"
                    width="32px"
                    height="32px"
                  />{" "}
                </h5>
                <p class="card-text">
                  {/* fetched feedback here */}I did nothing wrong.
                </p>
                <div className="row">
                  <div class="col-sm"></div>
=======
            {
              getServicedata.map((element, id) => {
                return (
                  <>
                    <div class="card mt-5">
                      <div class="card-header ">
                        <div className="row">
                          <div class="col-sm">
                            {/* fetched customer name */}
                            <h5>
                            {element.name}
                              {/* From : Sivan Alam{" "} */}
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
                              {Date(element.createdAt).slice(0,16)}
                              {/* Time : 03:77:80 */}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">
                          Message{" "}
                          <img
                            src={feedbackimage}
                            alt="clockImage"
                            width="32px"
                            height="32px"
                          />{" "}
                        </h5>
                        <p class="card-text">
                          {/* fetched feedback here */}
                          {/* I did nothing wrong. Please
                          ebarer moto amake maaf koro. I can treat you better. */}
                          {element.msg}
                        </p>
                        <div className="row">
                          <div class="col-sm"></div>
>>>>>>> d799853cf0cf81e95f26d5761294ed5f4f42d682

                          <ModalButton
                            modalButtonText="View Worker Profile"
                            modalButtonType="button"
                            modalButtonClassName="btn btn-dark w-25 "
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
                            banDecisionText="UnBan"
                            modalClosingButtonIcon="fa fa-close"
                          />
                        </div>
                      </div>
                    </div>
                  </>

                )
              })
            }
          </main>
        </div>
      </div>
    </>
  );
}
