import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import classes from "../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../styles/global/admin global/bootstrap.min.css";
import WorkerDashboardSideBarNavListPartials from "../../worker dashboard components/worker sideBarNavList partials/WorkerDashboardSideBarNavListPartials";
import WorkerDashboardAuthenticationButton from "../../worker dashboard components/WorkerDashboardAuthenticationButton";
import WorkerDashboardHeaderContent from "../../worker dashboard components/WorkerDashboardHeaderContent";
import WorkerDashboardNavBarSearchForm from "../../worker dashboard components/WorkerDashboardNavBarSearchForm";
import WorkerDashboardNavBarSearchTextInput from "../../worker dashboard components/WorkerDashboardNavBarSearchTextInput";
import WorkerDashboardNavBarTogglerButton from "../../worker dashboard components/WorkerDashboardNavBarTogglerButton";
import WorkerDashboardSideBarHeaderSection from "../../worker dashboard components/WorkerDashboardSideBarHeaderSection";
import WorkerDashboardSideBarNavListEndSection from "../../worker dashboard components/WorkerDashboardSideBarNavListEndSection";
import SelectAreaInput from "../worker dashboard actionForm components/SelectAreaInput";
import TextAreaInput from "../worker dashboard actionForm components/TextAreaInput";
import WorkerDashboardActionButton from "../worker dashboard actionForm components/WorkerDashboardActionButton";
import WorkerDashboardActionForm from "../worker dashboard actionForm components/WorkerDashboardActionForm";

export default function WorkerDashboardAppealMessageLayout() {
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
                adminHeaderContentText="Appeal Message"
                workerDashboardHeaderContentImage="fa-sharp fa-solid fa-hand"
              />

              {/* <i class="fa-sharp fa-solid fa-hand"></i> */}
              {/* <i class="fa-sharp fa-solid fa-message-question"></i> */}
              {/* <i class='bx bxs-message-alt-error' ></i> */}
              {/* <i class="fa-sharp fa-solid fa-message-exclamation"></i> */}
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>
            {/* <i class="fa-sharp fa-solid fa-envelope-open-text"></i> */}
            {/* <i class="fa-sharp fa-solid fa-screwdriver-wrench"></i> */}
            {/* //statistical container starts */}

            <div class="card w-100" style={{ height: "auto" }}>
              <div class=" card-body w-100" style={{ height: "auto" }}>
                {/* <form method="POST" enctype="multipart/form-data"> */}

                <WorkerDashboardActionForm method="POST">
                  {/* <SelectAreaInput
                    selectName="selectServiceCategory"
                    labelName="Select Service Category :"
                  /> */}
                  <SelectAreaInput
                    selectName="messageToBeSent"
                    labelName="To :"
                    value="admin"
                  />

                  <TextAreaInput
                    labelName="Appeal Message :"
                    placeholder="Write your message here..."
                    value=""
                    inputName="appealMessage"
                    textAreaInputRow="3"
                  />
                  <div class="col-md-4 col-lg-2 w-100 ">
                    <WorkerDashboardActionButton
                      adminActionButtonClassName="btn btn-info w-100"
                      adminActionButtonIcon="fa-solid fa-paper-plane"
                      adminActionButtonText="Appeal"
                      type="submit"
                      name=""
                    />
                  </div>
                </WorkerDashboardActionForm>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
