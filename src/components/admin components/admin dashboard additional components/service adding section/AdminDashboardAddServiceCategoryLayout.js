import React from "react";
// import "../../../styles/global/admin global/AdminDashboardCards.css";
// import "../../../styles/global/admin global/AdminDashboardStyles.css";
// import "../../../styles/global/admin global/bootstrap.min.css";
// import "../../../styles/global/admin global/bootstrap.min.css.map";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import TextAreaInput from "../admin dashboard actionForm components/TextAreaInput";
import TextInput from "../admin dashboard actionForm components/TextInput";
export default function AdminDashboardAddServiceCategoryLayout() {
  
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //     try {
  //       const config = {
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //       };

  //       setLoading(true);

  //       const { data } = await axios.post(
  //         "/api/services/addservice",
  //         {
  //           name,
  //           description
  //         },
  //         config
  //       )
  //       .then(res => {
  //         console.log(res);
  //       });

  //       console.log(data);
  //       localStorage.setItem("userInfo", JSON.stringify(data));
  //       setLoading(false);
  //       window.location.href = "/";
  //     } catch (error) {
  //       setError(error.response.data.message);
  //     }
  //   }

  const [inpval, setINP] = useState({
    name: "",
    description: "",
})

const setdata = (e) => {
    const { name, value } = e.target;
    console.log(name)
    console.log(value)
    setINP((preval) => {
        return {
            ...preval,
            [name]: value
        }
    })
}
const addinpdata = async(e) =>{
  e.preventDefault();

   try{
    console.log(inpval)
    const res = await axios.post("http://localhost:8003/api/services/addservice", inpval);
    // console.log(res)
    // const data = await res.json();
    console.log(res);
  
    if(res.status === 422){
        alert("error");
        console.log("error");
    }
    else{
        alert("data added");
        console.log("data added");
        navigate("/admin-dashboard/active-service-category", { replace: true });
    }
   }
   catch(error){
    alert(error)
   }
  
}
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
              <AdminDashboardHeaderContent adminHeaderContentText="Add Service Category" />
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>

            {/* //Form starts */}

            <div class="card w-100 mt-5" style={{ height: "auto" }}>
              <div class=" card-body w-100" style={{ height: "auto" }}>
                {/* <form method="POST" enctype="multipart/form-data"> */}
                <AdminDashboardActionForm method="POST" >
                  <TextInput
                    name="name"
                    labelName="Service Category : "
                    type="text"
                    placeholder="Provide a new Service Category"
                    value={inpval.name} 
                    onChange={setdata} 
                  />
                  <TextAreaInput
                    name="description"
                    type="text"
                    labelName="Service Category Description :"
                    placeholder="Add a description..."
                    textAreaInputRow="4"
                    value={inpval.description}
                    onChange={setdata} 
                    style={{ reSize: "none" }}
                  />


                  <div class="col-md-4 col-lg-2 w-100 ">
                    <AdminDashboardActionButton
                      adminActionButtonClassName="btn btn-info w-100"
                      adminActionButtonIcon="fa fa-briefcase"
                      adminActionButtonText="Add Service Category"
                      type="submit"
                      value="Submit" 
                      onClick={addinpdata}
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
