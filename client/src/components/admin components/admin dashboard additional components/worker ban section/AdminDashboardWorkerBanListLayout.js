import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import classes from "../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../styles/global/admin global/bootstrap.min.css";
import AdminDashboardSideBarNavListPartials from "../../admin dashboard components/admin sideBarNavList partials/AdminDashboardSideBarNavListPartials";
import AdminDashboardAuthenticationButton from "../../admin dashboard components/AdminDashboardAuthenticationButton";
import AdminDashboardHeaderContent from "../../admin dashboard components/AdminDashboardHeaderContent";
import AdminDashboardNavBarSearchForm from "../../admin dashboard components/AdminDashboardNavBarSearchForm";
import AdminDashboardNavBarSearchTextInput from "../../admin dashboard components/AdminDashboardNavBarSearchTextInput";
import AdminDashboardNavBarTogglerButton from "../../admin dashboard components/AdminDashboardNavBarTogglerButton";
import AdminDashboardSideBarHeaderSection from "../../admin dashboard components/AdminDashboardSideBarHeaderSection";
import AdminDashboardSideBarNavListEndSection from "../../admin dashboard components/AdminDashboardSideBarNavListEndSection";
import AdminDashboardActionButton from "../admin dashboard actionForm components/AdminDashboardActionButton";
import AdminDashboardActionForm from "../admin dashboard actionForm components/AdminDashboardActionForm";
import AdminDashboardDataTableColumnHeaderContent from "../admin dashboard data table/AdminDashboardDataTableColumnHeaderContent";
import AdminDashboardDataTableLayout from "../admin dashboard data table/AdminDashboardDataTableLayout";
import AdminDashboardDataTableRowContent from "../admin dashboard data table/AdminDashboardDataTableRowContent";
import AdminDashboardDataTableRowSection from "../admin dashboard data table/AdminDashboardDataTableRowSection";
export default function AdminDashboardWorkerBanListLayout() {
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
              <AdminDashboardHeaderContent adminHeaderContentText="Ban List" />
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //Data Table Section starts */}
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <AdminDashboardDataTableLayout className="table table-striped table-sm">
                    {/* //Column header section starts */}
                    <thead>
                      <tr>
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Worker ID"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Worker Name"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Worker Address"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Service Duration"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Average rating"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Grace Points"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Action"
                        />
                      </tr>
                    </thead>
                    {/* <AdminDashboardDataTableColumnHeaderContent
                      tableColumnClassName="col"
                      tableColumnHeaderText="Worker Name"
                    /> */}
                    {/* //table data body starts */}
                    <tbody>
                      <AdminDashboardDataTableRowSection>
                        {/* //get your fetch data here by loop*/}
                        <AdminDashboardDataTableRowContent>
                          {"11111"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Esrat"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Mohakhali"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"24.7 hour"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"2.44"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"23.66"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          <AdminDashboardActionForm actionFormClassName="form-floating">
                            <AdminDashboardActionButton
                              adminActionButtonClassName="btn btn-danger"
                              buttonType="submit"
                              adminActionButtonIcon="bx bxs-send"
                              adminActionButtonText="Ban"
                            />
                          </AdminDashboardActionForm>
                        </AdminDashboardDataTableRowContent>
                      </AdminDashboardDataTableRowSection>

                      <AdminDashboardDataTableRowSection>
                        {/* //get your fetch data here by loop*/}
                        <AdminDashboardDataTableRowContent>
                          {"10011"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Akib"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Mohakhali"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"20.7 hour"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"3.44"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"23.66"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          <AdminDashboardActionForm actionFormClassName="form-floating">
                            <AdminDashboardActionButton
                              adminActionButtonClassName="btn btn-danger"
                              buttonType="submit"
                              adminActionButtonIcon="bx bxs-send"
                              adminActionButtonText="Ban"
                            />
                          </AdminDashboardActionForm>
                        </AdminDashboardDataTableRowContent>
                      </AdminDashboardDataTableRowSection>
                      <AdminDashboardDataTableRowSection>
                        {/* //get your fetch data here by loop*/}
                        <AdminDashboardDataTableRowContent>
                          {"10003"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Salman"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Mohakhali"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"24.7 hour"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"4.44"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"23.66"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          <AdminDashboardActionForm actionFormClassName="form-floating">
                            <AdminDashboardActionButton
                              adminActionButtonClassName="btn btn-danger"
                              buttonType="submit"
                              adminActionButtonIcon="bx bxs-send"
                              adminActionButtonText="Ban"
                            />
                          </AdminDashboardActionForm>
                        </AdminDashboardDataTableRowContent>
                      </AdminDashboardDataTableRowSection>
                    </tbody>
                  </AdminDashboardDataTableLayout>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}