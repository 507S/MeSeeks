import React from "react";
import { NavLink } from "react-router-dom";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import workerProfileImage from "../../../../assets/worker assets/images/profile1.png";
import classes from "../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../styles/global/admin global/bootstrap.min.css";
import WorkerProfileActionButton from "../../worker additional components/worker profile section/WorkerProfileActionButton";
import WorkerDashboardSideBarNavListPartials from "../../worker dashboard components/worker sideBarNavList partials/WorkerDashboardSideBarNavListPartials";
import WorkerDashboardAuthenticationButton from "../../worker dashboard components/WorkerDashboardAuthenticationButton";
import WorkerDashboardHeaderContent from "../../worker dashboard components/WorkerDashboardHeaderContent";
import WorkerDashboardNavBarTogglerButton from "../../worker dashboard components/WorkerDashboardNavBarTogglerButton";
import WorkerDashboardSideBarHeaderSection from "../../worker dashboard components/WorkerDashboardSideBarHeaderSection";
import WorkerDashboardSideBarNavListEndSection from "../../worker dashboard components/WorkerDashboardSideBarNavListEndSection";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function WorkerDashboardProfileLayout() {
  const [getSubServicedata, setSubServicedata] = useState([]);
  let userInfo = false
  if (localStorage.getItem("userInfo")) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }
  const uid = userInfo.id;
  // const 
  useEffect(() => {
    fetch(`http://localhost:8003/api/worker/getworker/${uid}`)
      .then((res) => {
        return res.json();
      })
      .then((jsonResponse) => setSubServicedata(jsonResponse));
  }, []);
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
                adminHeaderContentText="Worker Profile"
                workerDashboardHeaderContentImage="fa-solid fa-helmet-safety"
              />

              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //statistical container starts */}
            {/* <div className="container">
              <WorkerDashboardGraphHeaderContent dashboardGraphHeaderContentText="Statistics" />
              <WorkerDashboardGraphCanvas />
            </div> */}

            {/* worker profile here */}
            <div class="text-center">
              <img
                src={workerProfileImage}
                class="rounded"
                height="auto"
                width="350px"
                style={{
                  boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)",
                  maxWidth: "30%",
                  cursor: "pointer",
                }}
                alt="workerProfileImage"
              />
            </div>
            {/* update profile from here */}

            <div class="card" style={{marginTop:"4%"}}>
            <h5 class="card-header">Profile Information</h5>
             <div class="card-body">
            <h5 class="card-title"> </h5>

            <div class="row g-3">
            <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><i className="fa fa-user"></i>&nbsp; Username : </label>
            <p class="card-text">{getSubServicedata.username}</p>

            </div>
            <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><i className="fa fa-envelope"></i>&nbsp;Email : </label>
            <p class="card-text">{getSubServicedata.email}</p>

            </div>
            <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><i className="fa fa-phone"></i>&nbsp; Phone Number : </label>
            <p class="card-text">{getSubServicedata.phoneNumber}</p>

            </div>
            <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><i className="fa fa-wrench"></i>&nbsp;Worker Genre :</label>
            <p class="card-text">{getSubServicedata.professionusername}</p>

            </div>
            
          <div class="col-md-6">
          <label for="inputPassword4" class="form-label"><i className="bx bxs-map"></i>&nbsp; Working Area : </label>
            <p class="card-text">{getSubServicedata.location}</p>

          </div>
          {/* <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><i className="fa fa-clock-o"></i>&nbsp;Working Shift : </label>
            <p class="card-text">{"data"}</p>

            </div> */}
            <div class="col-md-6">
            <label for="inputEmail4" class="form-label"><i className="fa fa-home"></i>&nbsp;Address : </label>
            <p class="card-text">{getSubServicedata.location}</p>

            </div>
            </div>
            
            <NavLink to="/worker-dashboard/update-profile">
                  <WorkerProfileActionButton
                    buttonType="submit"
                    workerProfileActionButtonIcon="fa fa-wrench"
                    workerProfileActionButtonText=" Update Profile "
                  />
                </NavLink>
            </div>
            </div>


          </main>
        </div>
      </div>
    </>
  );
}
