import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import UserLoaderLayout from "../../loading phase components/userSite loading phase/UserLoaderLayout";
import classes from "../../../styles/admin styles/AdminDashboardSideBarNavListSize.module.css";
import "../../../styles/global/admin global/AdminDashboardCards.css";
import "../../../styles/global/admin global/AdminDashboardStyles.css";
import "../../../styles/global/admin global/bootstrap.min.css";
import workList from "../../../assets/user assets/list.png"
import workType from "../../../assets/user assets/wrench.png"

import WorkerDashboardSideBarNavListPartials from "../worker dashboard components/worker sideBarNavList partials/WorkerDashboardSideBarNavListPartials";
// import WorkerDashboardAuthenticationButton from "../worker authentication components/";
import WorkerDashboardHeaderContent from "../worker dashboard components/WorkerDashboardHeaderContent";
// import WorkerDashboardNavBarSearchForm from "./WorkerDashboardNavBarSearchForm";
// import WorkerDashboardNavBarSearchTextInput from "./WorkerDashboardNavBarSearchTextInput";
import WorkerDashboardNavBarTogglerButton from "../worker dashboard components/WorkerDashboardNavBarTogglerButton";
import WorkerDashboardSideBarHeaderSection from "../worker dashboard components/WorkerDashboardSideBarHeaderSection";
import WorkerDashboardSideBarNavListEndSection from "../worker dashboard components/WorkerDashboardSideBarNavListEndSection";
function AcceptOrRejectWork() {
    const navigate = useNavigate()
    let userInfo = false

    if (localStorage.getItem("userInfo")) {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    const category = userInfo.category
    const uid = userInfo.id

    const [isLoading, setIsLoading] = React.useState(true)
    const [allWork, setAllWork] = React.useState([
        { workName: '', price: '' },
    ]);
    const [allPendingWork, setAllPendingWork] = React.useState([
        { workName: '', price: '' },
    ]);

    const [allCompletedWork, setAllCompletedWork] = React.useState([
        { workName: '', price: '' },
    ]);

    const fetchPendingWork = () => {

    }
    React.useEffect(() => {
        fetchProducts();
        fetchPendingWork();
    }, []);

    const fetchProducts = () => {
        axios
            .get(`http://localhost:8003/api/workers/a-r/${category}`)
            .then((res) => {
                console.log(res.data);
                setAllWork(res.data);
                console.log("this is all work")
                console.log(allWork)
                axios
                    .get(`http://localhost:8003/api/workers/pending/${uid}`)
                    .then((res) => {
                        console.log(res.data);
                        setAllPendingWork(res.data);
                        console.log("this is all pending work")
                        console.log(allPendingWork)
                        axios
                            .get(`http://localhost:8003/api/workers/completed/${uid}`)
                            .then((res) => {
                                console.log("********here***********")
                                console.log(res.data);
                                setAllCompletedWork(res.data);
                                console.log("this is all completed work")
                                console.log(allCompletedWork)
                                // setIsLoading(false)
                                setTimeout(() => {
                                    setIsLoading(false);
                                  }, 1000);
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });

    };

    const handleLogout = () =>{
        console.log("the button is clicked")
        localStorage.clear()
        window.location.href = '/platform-selection'
      }

    const AcceptWork = (id) => {
        console.log("work id:", id)
        console.log("worker id: ", uid)
        try {
            axios.post(`http://localhost:8003/api/workers/accept-work`, { id, uid })
            window.location.reload()
        }
        catch (e) {
            alert(e)
        }
    }

    if (isLoading) {
        return (
            <UserLoaderLayout />
        )
    }

    else {
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
            {/* <WorkerDashboardAuthenticationButton
              buttonClassName="btn btn-dark px-3"
              buttonType="submit"
              buttonLogoClassName="fa fa-sign-out"
              buttonText="Logout"
              spaceInBetweenButtonAndText="&nbsp;"
            /> */}
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
                workerDashboardHeaderContentImage="bx bxs-dashboard"
              />
              {/* <FontAwesomeIcon icon="fa-solid fa-grid-2" /> */}

              <div className="btn-toolbar mb-2 mb-md-0"></div>
              <button onClick={handleLogout}> Logout </button>
            </div>

          
            <div>
            <br />
            <h4>
            Incoming Work
            </h4>
            {allWork.map((work, i) => (
              <div class="card mt-3  " >
                <div class="card-header" >
                  <b style={{ color: "green" }} >Worker ID : {uid} </b> <img src={workList} style={{ float: "right" }} alt="" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><img src={workType} width="35px" height="35px" alt="" /> Worker Type : {work.workerType} </h5>
                  <p class="card-text mt-3" style={{ fontSize: "18px" }}>
                  <i className="fa fa-phone"></i>&nbsp;Work ID : {work._id}<br />
                    <i className="fa fa-phone"></i>&nbsp;Phone Number : +88{work.phone}<br />
                    <i className="fa fa-home"></i>&nbsp;Address : {work.address}<br />
                    <i className="fa fa-shopping-bag"></i>&nbsp;Work Status : {work.status}<br />
                    <hr />
                    {work.list.map((w) => (
                      <>
                        <i class="fa-solid fa-helmet-safety"></i>&nbsp;Work Name : {w.workName}<br />
                        <i className="fa fa-dollar"></i>&nbsp;Work Price : {w.price}<br />
                      </>
                    ))}
                  </p>
                  <button class="btn btn-success" style={{ float: "right" }} onClick={() => AcceptWork(work._id)} > <i className="fa fa-check"></i>&nbsp;Accept</button>
                </div>
              </div>
            ))}
          </div>


          <div>
          <br />
            <h4>
            Pending Work
            </h4>
            {allPendingWork.map((work, i) => (
              <div class="card mt-3 ">
                <div class="card-header" >
                  <b style={{ color: "green" }} >Worker ID : {uid} </b> <img src={workList} style={{ float: "right" }} alt="" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><img src={workType} width="35px" height="35px" alt="" /> Worker Type : {work.workerType} </h5>
                  <p class="card-text mt-3" style={{ fontSize: "18px" }}>
                  <i className="fa fa-phone"></i>&nbsp;Work ID : {work._id}<br />
                    <i className="fa fa-phone"></i>&nbsp;Phone Number : +88{work.phone}<br />
                    <i className="fa fa-home"></i>&nbsp;Address : {work.address}<br />
                    <i className="fa fa-shopping-bag"></i>&nbsp;Work Status : {work.status}<br />
                    <hr />
                    {work.list.map((w) => (
                      <>
                        <i class="fa-solid fa-helmet-safety"></i>&nbsp;Work Name : {w.workName}<br />
                        <i className="fa fa-dollar"></i>&nbsp;Work Price : {w.price}<br />
                      </>
                    ))}
                  </p>
                  <button class="btn btn-success" style={{ float: "right" }} onClick={() => AcceptWork(work._id)} > <i className="fa fa-check"></i>&nbsp;Accept</button>
                </div>
              </div>
            ))}
          </div>


          <div>
            <br />
            <h4>
            Completed Work
            </h4>
            {allCompletedWork.map((work, i) => (
              <div class="card mt-3 ">
                <div class="card-header" >
                  <b style={{ color: "green" }} >Worker ID : {uid} </b> <img src={workList} style={{ float: "right" }} alt="" />
                </div>
                <div class="card-body">
                  <h5 class="card-title"><img src={workType} width="35px" height="35px" alt="" /> Worker Type : {work.workerType} </h5>
                  <p class="card-text mt-3" style={{ fontSize: "18px" }}>
                  <i className="fa fa-phone"></i>&nbsp;Work ID : {work._id}<br />
                    <i className="fa fa-phone"></i>&nbsp;Phone Number : +88{work.phone}<br />
                    <i className="fa fa-home"></i>&nbsp;Address : {work.address}<br />
                    <i className="fa fa-shopping-bag"></i>&nbsp;Work Status : {work.status}<br />
                    <hr />
                    {work.list.map((w) => (
                      <>
                        <i class="fa-solid fa-helmet-safety"></i>&nbsp;Work Name : {w.workName}<br />
                        <i className="fa fa-dollar"></i>&nbsp;Work Price : {w.price}<br />
                      </>
                    ))}
                  </p>
                  <button class="btn btn-success" style={{ float: "right" }} onClick={() => AcceptWork(work._id)} > <i className="fa fa-check"></i>&nbsp;Accept</button>
                </div>
              </div>
            ))}
          </div>


          </main>
        </div>
      </div>
    </>
          
        )
    }

    // else{
    //     return(
    //         <h1>
    //             You are all caught up, no work to show
    //         </h1>
    //     )
    // }
}

export default AcceptOrRejectWork;