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
import AdminDashboardDataTableColumnHeaderContent from "../admin dashboard data table/AdminDashboardDataTableColumnHeaderContent";
import AdminDashboardDataTableLayout from "../admin dashboard data table/AdminDashboardDataTableLayout";
import AdminDashboardDataTableRowContent from "../admin dashboard data table/AdminDashboardDataTableRowContent";
import AdminDashboardDataTableRowSection from "../admin dashboard data table/AdminDashboardDataTableRowSection";
import ModalButton from "../admin dashboard popup components/ModalButton";
import ServiceDescriptionModal from "../admin dashboard popup components/ServiceDescriptionModal";
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";
export default function AdminDashboardActiveServiceCategoryLayout() {
  const [getServicedata, setServicedata] = useState([])
  useEffect(() => {
    fetch("http://localhost:8003/api/services/getservice").then(res => {
        return res.json();
    }).then(jsonResponse => setServicedata(jsonResponse));
}, []);
  // const getdata = async (e) => {
  //   try{
  //     axios.get("http://localhost:8003/api/services/getservice")
  //    .then(res=>setServicedata(res) )
  //    .catch(err=>console.log(err))
      // const res = await axios.get("http://localhost:8003/api/services/getservice");
    //   const res = await fetch("http://localhost:8003/api/services/getservice",{
    //     method:"GET",
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    // });
    // const data = await res.json();
    // console.log(res);
  
    //   if (res.status === 422) {
    //     alert("error");
    //     console.log("error ");
    //   }
    //   else {
    //     setServicedata(res);
    //     console.log("got data");
    //   }
  //   }
  //   catch(error){
  //     alert(error);
  //   }
    
  // }
  // useEffect(() => {
  //   getdata();
  // }, []);
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
              <AdminDashboardHeaderContent adminHeaderContentText="Service Category List" />
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
                          tableColumnHeaderText="Category ID"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Category Name"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Added Date"
                        />
                        <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Category Information"
                        />

                        {/* <AdminDashboardDataTableColumnHeaderContent
                          tableColumnClassName="col"
                          tableColumnHeaderText="Action"
                        /> */}
                      </tr>
                    </thead>
                    {/* <AdminDashboardDataTableColumnHeaderContent
                      tableColumnClassName="col"
                      tableColumnHeaderText="Worker Name"
                    /> */}
                    {/* //table data body starts */}
                    <tbody>
                      {
                        getServicedata.map((element,id) => {
                          return (
                    <>
                    
                    {/* <td>{element._id}</td>
                    <td>{element.name}</td>
                    <td>{element.createdAt}</td> */}

                      <AdminDashboardDataTableRowSection>
                        
                        <AdminDashboardDataTableRowContent>
                          {id+1}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {element.name}
                        </AdminDashboardDataTableRowContent>
                        {/* const date= new Date(element.createdAt)
                        res = date..toLocaleDateString(); */}
                        <AdminDashboardDataTableRowContent>
                          {Date(element.createdAt).slice(0,16)}
                        </AdminDashboardDataTableRowContent>
                        <AdminDashboardDataTableRowContent>
                          {
                            <>
                              <ModalButton
                                modalButtonText="Open"
                                modalButtonType="button"
                                modalButtonClassName="btn btn-dark w-25 "
                                modalPopUpButtonIcon="fa fa-info-circle"
                              />
                              <ServiceDescriptionModal
                                serviceTitle={element.name}
                                serviceTitleIcon="fa fa-wrench"
                                serviceDescription={element.description}
                                modalClosingButtonText="Close"
                                modalClosingButtonIcon="fa fa-close"
                              />
                            </>
                          }
                          
                        </AdminDashboardDataTableRowContent>

                        {/* <AdminDashboardDataTableRowContent> */}
                          {/* <AdminDashboardActionForm actionFormClassName="form-floating">
                            <AdminDashboardActionButton
                              adminActionButtonClassName="btn btn-danger"
                              buttonType="submit"
                              adminActionButtonIcon="bx bxs-send"
                              adminActionButtonText="Ban"
                            />
                          </AdminDashboardActionForm> */}
                        {/* </AdminDashboardDataTableRowContent> */}
                       
                      </AdminDashboardDataTableRowSection>
                      </>
                        
                        )
                      })
                    }
                      {/* <AdminDashboardDataTableRowContent>
                          <AdminDashboardActionForm actionFormClassName="form-floating">
                            <AdminDashboardActionButton
                              adminActionButtonClassName="btn btn-danger"
                              buttonType="submit"
                              adminActionButtonIcon="bx bxs-send"
                              adminActionButtonText="Ban"
                            />
                          </AdminDashboardActionForm>
                        </AdminDashboardDataTableRowContent>
                      </AdminDashboardDataTableRowSection> */}
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
