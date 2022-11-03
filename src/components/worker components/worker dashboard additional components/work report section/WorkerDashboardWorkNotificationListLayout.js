import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import classes from "../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../styles/global/admin global/bootstrap.min.css";
// import ModalButton from "../../../admin components/admin dashboard additional components/admin dashboard popup components/ModalButton";
// import ServiceDescriptionModal from "../../../admin components/admin dashboard additional components/admin dashboard popup components/ServiceDescriptionModal";
import WorkerDashboardSideBarNavListPartials from "../../worker dashboard components/worker sideBarNavList partials/WorkerDashboardSideBarNavListPartials";
import WorkerDashboardAuthenticationButton from "../../worker dashboard components/WorkerDashboardAuthenticationButton";
import WorkerDashboardHeaderContent from "../../worker dashboard components/WorkerDashboardHeaderContent";
import WorkerDashboardNavBarSearchForm from "../../worker dashboard components/WorkerDashboardNavBarSearchForm";
import WorkerDashboardNavBarSearchTextInput from "../../worker dashboard components/WorkerDashboardNavBarSearchTextInput";
import WorkerDashboardNavBarTogglerButton from "../../worker dashboard components/WorkerDashboardNavBarTogglerButton";
import WorkerDashboardSideBarHeaderSection from "../../worker dashboard components/WorkerDashboardSideBarHeaderSection";
import WorkerDashboardSideBarNavListEndSection from "../../worker dashboard components/WorkerDashboardSideBarNavListEndSection";
import WorkerDashboardActionButton from "../worker dashboard actionForm components/WorkerDashboardActionButton";
import WorkerDashboardDataTableColumnHeaderContent from "../worker dashboard data table/WorkerDashboardDataTableColumnHeaderContent";
import WorkerDashboardDataTableLayout from "../worker dashboard data table/WorkerDashboardDataTableLayout";
import WorkerDashboardDataTableRowContent from "../worker dashboard data table/WorkerDashboardDataTableRowContent";
import WorkerDashboardDataTableRowSection from "../worker dashboard data table/WorkerDashboardDataTableRowSection";
import ModalButton from "../worker dashboard popup components/ModalButton";
import WorkDetailsByCustomer from "../worker dashboard popup components/WorkDetailsByCustomer";
export default function WorkerDashboardWorkNotificationListLayout() {
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
                adminHeaderContentText="Work Notification"
                workerDashboardHeaderContentImage="fa-solid fa-bell "
              />
              {/* <i class="fa-solid fa-medal"></i> */}
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //Data Table Section starts */}
            <div className="card mt-3">
              <div className="card-body">
                <div className="table-responsive">
                  <WorkerDashboardDataTableLayout className="table table-striped table-sm">
                    {/* //Column header section starts */}
                    <thead>
                      <tr>
                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Hire ID"
                        />
                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Customer Name"
                        />
                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Work Address "
                        />
                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Work Shift"
                        />
                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Hired Date"
                        />

                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Hired Time"
                        />
                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Work Details"
                        />
                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Accept Request"
                        />
                        <WorkerDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Decline Request"
                        />
                      </tr>
                    </thead>

                    {/* //table data body starts */}
                    <tbody>
                      <WorkerDashboardDataTableRowSection>
                        {/* //get your fetch data here by loop*/}
                        <WorkerDashboardDataTableRowContent>
                          {"13001"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"Abrar"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"Mohakhali"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"Day"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"12/23/22"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"04:00 "}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {
                            <>
                              <ModalButton
                                modalButtonText="Show"
                                modalButtonType="button"
                                modalButtonClassName="btn btn-dark w-75 mt-1 "
                                modalPopUpButtonIcon="fa fa-info-circle"
                              />
                              <WorkDetailsByCustomer
                                serviceTitle="Work List"
                                serviceDescription="Fix water pumps etc"
                                modalClosingButtonText="Close"
                                modalClosingButtonIcon="fa fa-close"
                              />
                            </>
                          }
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          <form method="" action="">
                            <WorkerDashboardActionButton
                              adminActionButtonClassName="btn btn-success mt-1"
                              buttonType="submit"
                              adminActionButtonIcon="fa fa-wrench"
                              adminActionButtonText="Accept"
                              // onClick={submitHandler}
                            />
                          </form>
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          <form method="" action="">
                            <WorkerDashboardActionButton
                              adminActionButtonClassName="btn btn-danger mt-1"
                              buttonType="submit"
                              adminActionButtonIcon="fa-solid fa-trash-can"
                              adminActionButtonText="Decline"
                              // onClick={submitHandler}
                            />
                          </form>
                        </WorkerDashboardDataTableRowContent>
                      </WorkerDashboardDataTableRowSection>

                      <WorkerDashboardDataTableRowSection>
                        {/* //get your fetch data here by loop*/}
                        <WorkerDashboardDataTableRowContent>
                          {"13001"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"Abrar"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"Mohakhali"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"Day"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"12/23/22"}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {"04:00 "}
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          {
                            <>
                              <ModalButton
                                modalButtonText="Show"
                                modalButtonType="button"
                                modalButtonClassName="btn btn-dark w-75 mt-1 "
                                modalPopUpButtonIcon="fa fa-info-circle"
                              />
                              <WorkDetailsByCustomer
                                serviceTitle="Work List"
                                serviceDescription="Fix water pumps etc"
                                modalClosingButtonText="Close"
                                modalClosingButtonIcon="fa fa-close"
                              />
                            </>
                          }
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          <form method="" action="">
                            <WorkerDashboardActionButton
                              adminActionButtonClassName="btn btn-success mt-1"
                              buttonType="submit"
                              adminActionButtonIcon="fa fa-wrench"
                              adminActionButtonText="Accept"
                              // onClick={submitHandler}
                            />
                          </form>
                        </WorkerDashboardDataTableRowContent>
                        <WorkerDashboardDataTableRowContent>
                          <form method="" action="">
                            <WorkerDashboardActionButton
                              adminActionButtonClassName="btn btn-danger mt-1"
                              buttonType="submit"
                              adminActionButtonIcon="fa-solid fa-trash-can"
                              adminActionButtonText="Decline"
                              // onClick={submitHandler}
                            />
                          </form>
                        </WorkerDashboardDataTableRowContent>
                      </WorkerDashboardDataTableRowSection>
                    </tbody>
                  </WorkerDashboardDataTableLayout>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
