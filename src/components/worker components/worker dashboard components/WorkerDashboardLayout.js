import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";

import classes from "../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../styles/global/admin global/bootstrap.min.css";
import WorkerDashboardCardContent from "./worker dashboard card partials/WorkerDashboardCardContent";
import WorkerDashboardSideBarNavListPartials from "./worker sideBarNavList partials/WorkerDashboardSideBarNavListPartials";
import WorkerDashboardAuthenticationButton from "./WorkerDashboardAuthenticationButton";
import WorkerDashboardHeaderContent from "./WorkerDashboardHeaderContent";
import WorkerDashboardNavBarSearchForm from "./WorkerDashboardNavBarSearchForm";
import WorkerDashboardNavBarSearchTextInput from "./WorkerDashboardNavBarSearchTextInput";
import WorkerDashboardNavBarTogglerButton from "./WorkerDashboardNavBarTogglerButton";
import WorkerDashboardSideBarHeaderSection from "./WorkerDashboardSideBarHeaderSection";
import WorkerDashboardSideBarNavListEndSection from "./WorkerDashboardSideBarNavListEndSection";
export default function WorkerDashboardLayout() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <WorkerDashboardSideBarHeaderSection adminSideBarHeaderText="MeSeeks" />
        <WorkerDashboardNavBarTogglerButton togglerIconClassName="navbar-toggler-icon" />
        <WorkerDashboardNavBarSearchForm action="">
          <WorkerDashboardNavBarSearchTextInput
            className="form-control mr-sm-2"
            inputType="search"
            placeholder="Search"
            aria-label="Search"
          />
        </WorkerDashboardNavBarSearchForm>
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
                adminHeaderContentText="Dashboard"
                workerDashboardHeaderContentImage="bx bxs-dashboard"
              />
              {/* <FontAwesomeIcon icon="fa-solid fa-grid-2" /> */}

              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //card sections starts*/}
            <div className="row row-cols-1 row-cols-md-3 g-3">
              <WorkerDashboardCardContent
                cardContentText="Completed Works"
                cardContentDatabaseFetchedData="20"
                cardIcon="../../../../assets/admin assets/customer.png"
              />
              <WorkerDashboardCardContent
                cardContentText="Work Notifications"
                cardContentDatabaseFetchedData="20"
              />
              <WorkerDashboardCardContent
                cardContentText="Average Rating"
                cardContentDatabaseFetchedData="20"
              />
              <WorkerDashboardCardContent
                cardContentText="Grace Points"
                cardContentDatabaseFetchedData="20"
              />
              <WorkerDashboardCardContent
                cardContentText="Message"
                cardContentDatabaseFetchedData="20"
              />
              <WorkerDashboardCardContent
                cardContentText="Total Earnings"
                cardContentDatabaseFetchedData="20"
              />
              {/* <WorkerDashboardCardContent
                cardContentText="Total Customers"
                cardContentDatabaseFetchedData="20"
              /> */}
            </div>

            {/* //statistical container starts */}
            {/* <div className="container">
              <WorkerDashboardGraphHeaderContent dashboardGraphHeaderContentText="Statistics" />
              <WorkerDashboardGraphCanvas />
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
}
