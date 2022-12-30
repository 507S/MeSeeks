import React from 'react';
import { NavLink } from 'react-router-dom';
import workerProfileImage from "../../../assets/worker assets/images/profile1.png";
import "../../../styles/global/user global/aos.css";
import "../../../styles/global/user global/font-awesome.min.css";
import "../../../styles/global/user global/UserHomePageDesign.css";
import UserCarouselSection from "../../user components/user additional components/user home section/carousel section/UserCarouselSection";
import UserHomeSectionFooter from "../../user components/user additional components/user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "../../user components/user additional components/user home section/user navList section/UserNavList";

export default function UserProfileLayout() {
  return (
    <main>
      <header
        class="p-3  text-white fixed-top  "
        style={{ background: "#057a8d" }}
      >
        <div class="container mt-3">
          <UserNavList />
        </div>
      </header>
      <hr />
      <UserCarouselSection />

      <div class="container marketing">
        <h3
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginBottom: "10%",
            color: "#f1c111",
          }}
        >
         Profile
        </h3>
      </div>

      <div className="container mt-7 ">
      <div class="text-center">
              <img
                src={workerProfileImage}
                class="rounded"
                height="350px"
                width="350px"
                style={{
                  boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)",
                  maxWidth: "30%",
                  cursor: "pointer",
                }}
                alt="workerProfileImage"
              />
            </div>
      <div class="card " style={{marginTop:"5%"}}>
      <div class="card-body">

      <div class="row g-3" 
      // onSubmit={handleSubmit}
      >
      <div class="col-md-6">
      <label for="username" class="form-label"><i className='fa fa-user'></i>&nbsp;Username : {"username"}</label>
  
      </div>
     <div class="col-md-6">
      <label for="email" class="form-label"><i className='fa fa-wrench'></i>&nbsp;Email : {"email"}</label>
      
      </div>
   
    <div class="col-md-6">
    <label for="location" class="form-label"><i className='fa fa-map-marker'></i>&nbsp;Location : {"location"}</label>
   
    </div>
    <div class="col-md-6">
    <label for="address" class="form-label"><i className='fa fa-home'></i>&nbsp;Address : {"address"}</label>
    
    
  </div>
  <NavLink to="/users/update-profile" >
     <button 
      // onClick={handleSubmit} 
      class="btn btn-info w-100 ">
      <i className="fa fa-cog"></i>
      &nbsp;Update Profile</button>
                    {/* </div> */}
                    </NavLink>

  

</div>
</div>
</div>
      </div>

      {/* worker hiring form

  */}

      
      <UserHomeSectionFooter />
    </main>
  )
}
