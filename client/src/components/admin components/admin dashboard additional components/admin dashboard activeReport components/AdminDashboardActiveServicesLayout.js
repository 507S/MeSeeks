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
import SelectAreaInput from "../admin dashboard actionForm components/SelectAreaInput";
import AdminDashboardDataTableColumnHeaderContent from "../admin dashboard data table/AdminDashboardDataTableColumnHeaderContent";
import AdminDashboardDataTableLayout from "../admin dashboard data table/AdminDashboardDataTableLayout";
import AdminDashboardDataTableRowContent from "../admin dashboard data table/AdminDashboardDataTableRowContent";
import AdminDashboardDataTableRowSection from "../admin dashboard data table/AdminDashboardDataTableRowSection";
import ModalButton from "../admin dashboard popup components/ModalButton";
import ServiceDescriptionModal from "../admin dashboard popup components/ServiceDescriptionModal";
export default function AdminDashboardActiveServicesLayout() {
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
              <AdminDashboardHeaderContent adminHeaderContentText="Active Services " />
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //Form Section starts */}

            <div class="card w-100" style={{ height: "auto" }}>
              <div class=" card-body w-100" style={{ height: "auto" }}>
                {/* <form method="POST" enctype="multipart/form-data"> */}
                <AdminDashboardActionForm method="POST">
                  <SelectAreaInput
                    selectName="selectServiceCategory"
                    labelName="Select Service Category :"
                  />

                  <div class="col-md-4 col-lg-2 w-100 mt-3">
                    <AdminDashboardActionButton
                      adminActionButtonClassName="btn btn-info w-100"
                      adminActionButtonIcon="fa fa-wrench"
                      adminActionButtonText="Show Services"
                      type="submit"
                    />
                  </div>
                </AdminDashboardActionForm>
              </div>
            </div>

            {/* //Form Section ends */}

            {/* //Data Table Section starts */}
            <div className="card mt-3">
              <div className="card-body">
                <div className="table-responsive">
                  <AdminDashboardDataTableLayout className="table table-striped table-sm">
                    {/* //Column header section starts */}
                    <thead>
                      <tr>
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Service ID"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Service Name"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText=" Service Category"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Active Regions"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Added Date"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Service Information"
                        />
                      </tr>
                    </thead>

                    {/* //table data body starts */}
                    <tbody>
                      <AdminDashboardDataTableRowSection>
                        {/* //get your fetch data here by loop*/}
                        <AdminDashboardDataTableRowContent>
                          {"12001"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Plumber"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Home Appliances"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Mohakhali"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"22/08/22"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {
                            <>
                              <ModalButton
                                modalButtonText="Open"
                                modalButtonType="button"
                                modalButtonClassName="btn btn-dark w-50 "
                                modalPopUpButtonIcon="fa fa-info-circle"
                              />
                              <ServiceDescriptionModal
                                serviceTitle="Plumber"
                                serviceTitleIcon="fa fa-wrench"
                                serviceDescription="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as ???a group of sentences or a single sentence that forms a unit??? (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the ???controlling idea,??? because it controls what happens in the rest of the paragraph."
                                modalClosingButtonText="Close"
                                modalClosingButtonIcon="fa fa-close"
                              />
                            </>
                          }
                        </AdminDashboardDataTableRowContent>
                      </AdminDashboardDataTableRowSection>

                      <AdminDashboardDataTableRowSection>
                        {/* //get your fetch data here by loop*/}
                        <AdminDashboardDataTableRowContent>
                          {"12001"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Electrician"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Home Appliances"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"Mohakhali"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {"22/08/22"}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {
                            <>
                              <ModalButton
                                modalButtonText="Open"
                                modalButtonType="button"
                                modalButtonClassName="btn btn-dark w-50 "
                                modalPopUpButtonIcon="fa fa-info-circle"
                              />
                              <ServiceDescriptionModal
                                serviceTitle="Electrician"
                                serviceDescription="Fix water pumps etc"
                                modalClosingButtonText="Close"
                                modalClosingButtonIcon="fa fa-close"
                              />
                            </>
                          }
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
