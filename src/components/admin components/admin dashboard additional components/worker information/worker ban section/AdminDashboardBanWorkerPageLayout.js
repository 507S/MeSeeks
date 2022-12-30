import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import classes from "../../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../../styles/global/admin global/bootstrap.min.css";
import AdminDashboardSideBarNavListPartials from "../../../admin dashboard components/admin sideBarNavList partials/AdminDashboardSideBarNavListPartials";
import AdminDashboardAuthenticationButton from "../../../admin dashboard components/AdminDashboardAuthenticationButton";
import AdminDashboardHeaderContent from "../../../admin dashboard components/AdminDashboardHeaderContent";
import AdminDashboardNavBarTogglerButton from "../../../admin dashboard components/AdminDashboardNavBarTogglerButton";
import AdminDashboardSideBarHeaderSection from "../../../admin dashboard components/AdminDashboardSideBarHeaderSection";
import AdminDashboardSideBarNavListEndSection from "../../../admin dashboard components/AdminDashboardSideBarNavListEndSection";
import AdminDashboardActionButton from "../../admin dashboard actionForm components/AdminDashboardActionButton";
import AdminDashboardActionForm from "../../admin dashboard actionForm components/AdminDashboardActionForm";
import TextAreaInput from "../../admin dashboard actionForm components/TextAreaInput";
import TextInput from "../../admin dashboard actionForm components/TextInput";
export default function AdminDashboardWorkerBanPageLayout() {
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
              <AdminDashboardHeaderContent adminHeaderContentText="Ban Worker" />
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //Data Table Section starts */}
            <div class="card w-100 mt-5" style={{ height: "auto" }}>
              <div class=" card-body w-100" style={{ height: "auto" }}>
                {/* <form method="POST" enctype="multipart/form-data"> */}
                <AdminDashboardActionForm method="POST" >
                  <TextInput
                    name="workerID"
                    labelName="Worker ID : "
                    type="text"
                    placeholder="Provide a Worker ID"
                    // value={inpval.name} 
                    // onChange={setdata} 
                  />
                  <TextAreaInput
                    name="description"
                    type="text"
                    labelName="Provide Ban Message :"
                    placeholder="Add a ban message..."
                    textAreaInputRow="4"
                    // value={inpval.description}
                    // onChange={setdata} 
                    style={{ reSize: "none" }}
                  />


                  <div class="col-md-4 col-lg-2 w-100 ">
                    <AdminDashboardActionButton
                      adminActionButtonClassName="btn btn-info w-100"
                      adminActionButtonIcon="fa fa-briefcase"
                      adminActionButtonText="Add Service Category"
                      type="submit"
                      value="Submit" 
                      // onClick={addinpdata}
                    />
                  </div>
                </AdminDashboardActionForm>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
