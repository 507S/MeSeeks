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
import ChooseServiceImage from "../admin dashboard actionForm components/ChooseServiceImage";
import SelectAreaInput from "../admin dashboard actionForm components/SelectAreaInput";
// import AdminDashboardActionForm from "../admin dashboard actionForm components/AdminDashboardActionForm"
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextAreaInput from "../admin dashboard actionForm components/TextAreaInput";
import TextInput from "../admin dashboard actionForm components/TextInput";

export default function AdminDashboardAddServiceLayout() {
  const navigate = useNavigate();
  //   const [inpval, setINP] = useState({
  //     serviceName: "",
  //     subServiceName: "",
  //     description:""
  // })

  // const setdata = (e) => {
  //     const { name, value } = e.target;
  //     console.log(name)
  //     console.log(value)
  //     setINP((preval) => {
  //         return {
  //             ...preval,
  //             [name]: value
  //         }
  //     })
  // }
  // const addinpdata = async(e) =>{
  //   e.preventDefault();

  //    try{
  //     console.log(inpval)
  //     const res = await axios.post("http://localhost:8003/api/subservices/addsubservice", inpval);
  //     // console.log(res)
  //     // const data = await res.json();
  //     console.log(res);

  //     if(res.status === 422){
  //         alert("error");
  //         console.log("error");
  //     }
  //     else{
  //         alert("data added");
  //         console.log("data added");
  //         navigate("/admin-dashboard/active-service-category", { replace: true });
  //     }
  //    }
  //    catch(error){
  //     alert(error)
  //    }

  // }
  const [newSubService, setNewSubService] = useState({
    serviceName: "",
    subServiceName: "",
    image: "",
    description: "",
  });
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
const {id} = useParams("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newSubService.image);
    const formData = new FormData();
    formData.append("serviceName", newSubService.serviceName);
    formData.append("subServiceName", newSubService.subServiceName);
    // formData.append("image", newSubService.image);
    // formData.append('image', URL.createObjectURL(newSubService.image));
    formData.append('image', await toBase64(newSubService.image) );

    //, URL.createObjectURL(newSubService.image)
    formData.append("description", newSubService.description);

    axios
      .patch(`http://localhost:8003/api/subservices//updateSubService/${id}`, formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("service updated");
    navigate("/admin-dashboard/active-services", { replace: true });
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
              <AdminDashboardHeaderContent adminHeaderContentText="Update Service" />
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //Form starts */}

            <div class="card w-100" style={{ height: "auto" }}>
              <div class=" card-body w-100" style={{ height: "auto" }}>
                {/* <form method="POST" enctype="multipart/form-data"> */}
                <AdminDashboardActionForm
                  method="POST"
                  onSubmit={handleSubmit}
                  enctype="multipart/form-data"
                >
                  {/* <form onSubmit={handleSubmit} enctype="multipart/form-data"> */}
                  <SelectAreaInput
                    name="serviceName"
                    value={newSubService.serviceName}
                    onChange={handleChange}
                    labelName="Select Service Category :"
                  />
                  {/* <TextInput
                    name="serviceName"
                    type="text"
                    value={inpval.serviceName} 
                    onChange={setdata}
                    labelName="Service Category :"
                    placeholder="Provide a Service Category name"
                  /> */}
                  <TextInput
                    labelName="Service Name : "
                    type="text"
                    name="subServiceName"
                    value={newSubService.subServiceName}
                    onChange={handleChange}
                    // value={inpval.subServiceName}
                    // onChange={setdata}
                    placeholder="Provide a new Service name"
                  />
                  <ChooseServiceImage
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    onChange={handlePhoto}
                    type="file"
                    labelName="Choose Service Image :"
                  />
                  <TextAreaInput
                    labelName="Service Description :"
                    placeholder="Add a description..."
                    name="description"
                    value={newSubService.description}
                    onChange={handleChange}
                    // value={inpval.description}
                    // onChange={setdata}
                    textAreaInputRow="4"
                    style={{ reSize: "none" }}
                  />
                  <div class="col-md-4 col-lg-2 w-100 ">
                    <AdminDashboardActionButton
                      adminActionButtonClassName="btn btn-info w-100"
                      adminActionButtonIcon="fa fa-wrench"
                      adminActionButtonText="Update Service"
                      type="submit"
                      // onClick={handleSubmit}
                      value="Submit"
                      // onClick={addinpdata}
                    />
                  </div>
                  {/* </form> */}
                </AdminDashboardActionForm>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
