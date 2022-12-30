import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../styles/global/admin global/bootstrap.min.css";
import AdminDashboardSideBarNavListPartials from "../../admin dashboard components/admin sideBarNavList partials/AdminDashboardSideBarNavListPartials";
import AdminDashboardAuthenticationButton from "../../admin dashboard components/AdminDashboardAuthenticationButton";
import AdminDashboardHeaderContent from "../../admin dashboard components/AdminDashboardHeaderContent";
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
  const [getSubServicedata, setSubServicedata] = useState([]);
  // const 
  useEffect(() => {
    fetch("http://localhost:8003/api/subservices/getsubservices")
      .then((res) => {
        return res.json();
      })
      .then((jsonResponse) => setSubServicedata(jsonResponse));
  }, []);
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <AdminDashboardSideBarHeaderSection adminSideBarHeaderText="MeSeeks" />
        <AdminDashboardNavBarTogglerButton togglerIconClassName="navbar-toggler-icon" />
        {/* <AdminDashboardNavBarSearchForm action="">
          <AdminDashboardNavBarSearchTextInput
            className="form-control mr-sm-2"
            inputType="search"
            placeholder="Search"
            aria-label="Search"
          />
        </AdminDashboardNavBarSearchForm> */}
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
                          tableColumnHeaderText="Added Date"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Service Information"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Update Service"
                        />
                      </tr>
                    </thead>

                    {/* //table data body starts */}
                    <tbody>
                      {getSubServicedata.map((element, id) => {
                        // const base64String = btoa(String.fromCharCode(...new Uint8Array(element.image.data.data)));
                        // const blob = new Blob([Int8Array.from(element.image.data.data)], {type: element.image.contentType });

                        // const img = window.URL.createObjectURL(blob);
                        return (
                          <>
                            <AdminDashboardDataTableRowSection>
                              {/* //get your fetch data here by loop*/}
                              <AdminDashboardDataTableRowContent>
                                {element._id}
                              </AdminDashboardDataTableRowContent>
                              <AdminDashboardDataTableRowContent>
                                {element.subServiceName}
                              </AdminDashboardDataTableRowContent>
                              <AdminDashboardDataTableRowContent>
                                {element.serviceName}
                              </AdminDashboardDataTableRowContent>

                              <AdminDashboardDataTableRowContent>
                                {Date(element.createdAt).slice(0, 16)}
                              </AdminDashboardDataTableRowContent>
                              <AdminDashboardDataTableRowContent>
                                {
                                  <>
                                    <ModalButton
                                      modalButtonText="Open"
                                      modalButtonType="button"
                                      modalButtonClassName="btn btn-dark w-50 "
                                      modalPopUpButtonIcon="fa fa-info-circle"
                                      targetId={`#modal-${element._id}`}
                                    />
                                    <ServiceDescriptionModal
                                      id={`modal-${element._id}`}
                                      serviceTitle={element.subServiceName}
                                      serviceTitleIcon="fa fa-wrench"
                                      source={element.image.data}
                                      serviceDescription={element.description}
                                      modalClosingButtonText="Close"
                                      modalClosingButtonIcon="fa fa-close"
                                    />
                                  </>
                                }
                              </AdminDashboardDataTableRowContent>
                              
                              <AdminDashboardDataTableRowContent>
                              {
                                <>
                                <NavLink to={`/admin-dashboard/update-service/${element._id}`}>
                                  <AdminDashboardActionButton
                                    adminActionButtonClassName="btn btn-info"
                                    adminActionButtonText="Update"
                                    buttonType="button"
                                  />
                                </NavLink>
                                </>
                                }
                              </AdminDashboardDataTableRowContent>
                            </AdminDashboardDataTableRowSection>
                          </>
                        );
                      })}
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
