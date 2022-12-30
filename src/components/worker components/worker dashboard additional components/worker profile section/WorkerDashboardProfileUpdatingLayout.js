import React from "react";
import { NavLink } from "react-router-dom";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import workerProfileImage from "../../../../assets/worker assets/images/1.jpg";
import classes from "../../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../../styles/global/admin global/bootstrap.min.css";
import WorkerProfileImageChooseInput from "../../worker additional components/worker profile section/WorkerProfileImageChooseInput";
import WorkerProfileSelectInput from "../../worker additional components/worker profile section/WorkerProfileSelectInput";
import WorkerProfileTextAreaInput from "../../worker additional components/worker profile section/WorkerProfileTextAreaInput";
import WorkerProfileTextInput from "../../worker additional components/worker profile section/WorkerProfileTextInput";
// import WorkerProfileUpdateButton from "../../worker additional components/worker profile section/WorkerProfileUpdateButton";
import ProfileUpdateCancelButton from "../../worker additional components/worker profile section/ProfileUpdateCancelButton";
import ProfileUpdateConfirmButton from "../../worker additional components/worker profile section/ProfileUpdateConfirmButton";
import WorkerDashboardSideBarNavListPartials from "../../worker dashboard components/worker sideBarNavList partials/WorkerDashboardSideBarNavListPartials";
import WorkerDashboardAuthenticationButton from "../../worker dashboard components/WorkerDashboardAuthenticationButton";
import WorkerDashboardHeaderContent from "../../worker dashboard components/WorkerDashboardHeaderContent";
import WorkerDashboardNavBarTogglerButton from "../../worker dashboard components/WorkerDashboardNavBarTogglerButton";
import WorkerDashboardSideBarHeaderSection from "../../worker dashboard components/WorkerDashboardSideBarHeaderSection";
import WorkerDashboardSideBarNavListEndSection from "../../worker dashboard components/WorkerDashboardSideBarNavListEndSection";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function WorkerDashboardProfileUpdatingLayout() {
  const navigate = useNavigate();
  let userInfo = false
  if (localStorage.getItem("userInfo")) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
  }
  const uid = userInfo.id;
  const [newSubService, setNewSubService] = useState({
    username: "",
    phoneNumber: "",
    image: "",
    email:"",
    location: "",
  });
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
// const {id} = useParams("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newSubService.image);
    const formData = new FormData();
    formData.append("username", newSubService.username);
    formData.append("phoneNumber", newSubService.phoneNumber);
    formData.append("email", newSubService.email);
    // formData.append("image", newSubService.image);
    // formData.append('image', URL.createObjectURL(newSubService.image));
    formData.append('image', await toBase64(newSubService.image) );

    //, URL.createObjectURL(newSubService.image)
    formData.append("location", newSubService.location);

    axios
      .patch(`http://localhost:8003/api/worker/updateProfile/${uid}`, formData)
      .then((res) => {
        console.log(res);
        alert("profile updated");
        navigate("/admin-dashboard/active-services", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        alert("update failed");
      });
    
  };

  const handleChange = (e) => {
    console.log(e);
    setNewSubService({ ...newSubService, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    console.log(e.target.files[0]);
    setNewSubService({ ...newSubService, image: e.target.files[0] });
  };
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
                adminHeaderContentText="Update Profile"
                workerDashboardHeaderContentImage="fa fa-wrench"
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

            <div className="container " style={{ marginTop: "5%" }}>
              <form class="row g-3 " method="POST"
                  onsubmit={handleSubmit}
                  enctype="multipart/form-data">
                <WorkerProfileTextInput
                  labelFor="username"
                  labelIconClassName="fa fa-user"
                  labelName="Username"
                  textInputType="text"
                  inputName="username"
                  value={newSubService.username}
                  onChange={handleChange}
                  // placeholder="Username..."
                />
                <WorkerProfileTextInput
                  labelFor="email"
                  labelIconClassName="fa fa-envelope"
                  labelName="Email"
                  textInputType="email"
                  inputName="email"
                  value={newSubService.email}
                  onChange={handleChange}
                  // placeholder="Email..."
                />
                <WorkerProfileTextInput
                  labelFor="phoneNumber"
                  labelIconClassName="fa fa-phone"
                  labelName="Phone Number"
                  textInputType="text"
                  inputName="phoneNumber"
                  value={newSubService.phoneNumber}
                  onChange={handleChange}
                  // placeholder="Phone Number..."
                />
                <WorkerProfileImageChooseInput
                  accept=".png, .jpg, .jpeg"
                  onChange={handlePhoto}
                  imageInputFieldClassName="col-md-6"
                  labelFor="formFile"
                  labelIconClassName="fa fa-picture-o"
                  labelName="Change Avatar"
                  inputType="file"
                  inputName="photo"
                />
                {/* <WorkerProfileSelectInput
                  labelFor="areaSelection"
                  labelIconClassName="bx bxs-map"
                  labelName="Select Working Area"
                  selectNamesFetchedFromDatabase="Uttara"
                /> */}
                {/* <WorkerProfileSelectInput
                  labelFor="workingShift"
                  labelIconClassName="fa fa-clock-o"
                  labelName="Select Working Shift"
                  selectNamesFetchedFromDatabase="Day"
                /> */}

                <WorkerProfileTextAreaInput
                  labelFor="address"
                  labelIconClassName="fa fa-home"
                  labelName="Address"
                  textInputRow="3"
                  inputName="location"
                  value={newSubService.location}
                  onChange={handleChange}
                  placeholder="Your Address..."
                />

                {/* <WorkerProfileUpdateButton
                  buttonType="submit"
                  workerProfileActionButtonIcon="fa fa-check"
                  workerProfileActionButtonText="Confirm Update  "
                /> */}
                <div className="col-md-6 mt-3">
                  <button onClick={handleSubmit}>Confirm Update</button>
                </div>
                <div className="col-md-6 mt-3">
                  <NavLink to="/worker-dashboard/worker-profile">
                    <ProfileUpdateCancelButton
                      type="submit"
                      workerProfileActionButtonIcon="fa fa-arrow-left"
                      workerProfileActionButtonText="Go Back "
                      btnClassName="btn btn-dark w-100"

                      //no need onClick={submitHandler} redirected back to  the service page
                    />
                  </NavLink>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
