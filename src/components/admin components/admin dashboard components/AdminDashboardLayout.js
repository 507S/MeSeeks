import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import classes from "../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../styles/global/admin global/bootstrap.min.css";
import AdminDashboardCardContent from "./admin dashboard card partials/AdminDashboardCardContent";
import AdminDashboardGraphCanvas from "./admin dashboard graph/AdminDashboardGraphCanvas";
import AdminDashboardGraphHeaderContent from "./admin dashboard graph/AdminDashboardGraphHeaderContent";
import AdminDashboardSideBarNavListPartials from "./admin sideBarNavList partials/AdminDashboardSideBarNavListPartials";
import AdminDashboardAuthenticationButton from "./AdminDashboardAuthenticationButton";
import AdminDashboardHeaderContent from "./AdminDashboardHeaderContent";
import AdminDashboardNavBarSearchForm from "./AdminDashboardNavBarSearchForm";
import AdminDashboardNavBarSearchTextInput from "./AdminDashboardNavBarSearchTextInput";
import AdminDashboardNavBarTogglerButton from "./AdminDashboardNavBarTogglerButton";
import AdminDashboardSideBarHeaderSection from "./AdminDashboardSideBarHeaderSection";
import AdminDashboardSideBarNavListEndSection from "./AdminDashboardSideBarNavListEndSection";
export default function AdminDashboardLayout() {
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
              <AdminDashboardHeaderContent adminHeaderContentText="Dashboard" />
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //card sections starts*/}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <AdminDashboardCardContent
                cardContentText="Total Customers"
                cardContentDatabaseFetchedData="20"
              />
              <AdminDashboardCardContent
                cardContentText="Total Customers"
                cardContentDatabaseFetchedData="20"
              />
              <AdminDashboardCardContent
                cardContentText="Total Customers"
                cardContentDatabaseFetchedData="20"
              />
              <AdminDashboardCardContent
                cardContentText="Total Customers"
                cardContentDatabaseFetchedData="20"
              />
              <AdminDashboardCardContent
                cardContentText="Total Customers"
                cardContentDatabaseFetchedData="20"
              />
              <AdminDashboardCardContent
                cardContentText="Total Customers"
                cardContentDatabaseFetchedData="20"
              />
              <AdminDashboardCardContent
                cardContentText="Total Customers"
                cardContentDatabaseFetchedData="20"
              />
            </div>

            {/* //statistical container starts */}
            <div className="container">
              <AdminDashboardGraphHeaderContent dashboardGraphHeaderContentText="Statistics" />
              <AdminDashboardGraphCanvas />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
