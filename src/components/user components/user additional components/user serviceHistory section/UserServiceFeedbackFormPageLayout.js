import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../../../styles/global/user global/aos.css";
import "../../../../styles/global/user global/font-awesome.min.css";
import "../../../../styles/global/user global/UserHomePageDesign.css";
import UserCarouselSection from "../user home section/carousel section/UserCarouselSection";
import UserHomeSectionFooter from "../user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "../user home section/user navList section/UserNavList";

export default function UserServiceFeedbackFormPageLayout() {
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
         Worker Feedback Form
        </h3>
      </div>

      <div className="container mt-7 ">
      <div class="card">
      <div class="card-body">

      <form class="row g-3" 
      // onSubmit={handleSubmit}
      >
      <div class="col-md-6">
      <label for="email" class="form-label"><i className='fa fa-user'></i>&nbsp;Your Email</label>
      <input type="email" 
      //  value={formData.workerType}
      //  onChange={handleEvent}
      class="form-control" 
      required
      />
    </div>
     <div class="col-md-6">
      <label for="feedbackAgainstWorkerName" class="form-label"><i className='fa fa-wrench'></i>&nbsp;Feedback against Worker</label>
      <input type="text" 
      // value={formData.workerType}
      // onChange={handleEvent}
      class="form-control" 
      
    />
      </div>
    <div class="col-12">
    <label for="rating" class="form-label"><i className='fa fa-star'></i>&nbsp;Provide Rating</label>
    <input type="range" 
    // value={formData.workerType}
    // onChange={handleEvent}
    class="form-range" 
    min="0" 
    max="5" 
    id="customRange2" 
    required
    >
      
    </input>
    </div>
    <div class="col-12">
    <label for="location" class="form-label"><i className='fa fa-map-marker'></i>&nbsp;Provide your location</label>
    <input type="text" 
    // value={formData.workerType}
    // onChange={handleEvent}
    class="form-control" 
    id="inputAddress" 
    placeholder="Location"
    required
    />
    </div>
    <div class="col-12">
    <label for="address" class="form-label"><i className='fa fa-home'></i>&nbsp;Provide your Address</label>
    <input type="text" 
    // value={formData.workerType}
    // onChange={handleEvent}
    class="form-control" 
    id="inputAddress" 
    placeholder="Address" 
    required
    />
  </div>
  <div class="col-12">
    <label for="comments" class="form-label"  ><i className='fa fa-comments'></i>&nbsp;Provide reason for your rating</label>
    <input type="text" 
    class="form-control" 
    // value={formData.workerType}
    //   onChange={handleEvent}
    id="inputAddress2" 
    placeholder="Comments"
    style={{height:"60px"}}
    required />
  </div>
  
  <div class="col-md-6">
    <button type="submit" class="btn btn-info w-100"><i className='fa fa-send'></i>&nbsp;Send</button>
  </div>
  <div class="col-md-6">
    <NavLink to="/users/service-history">
    <button type="submit" class="btn btn-dark w-100"><i className='fa fa-times'></i>&nbsp;Cancel</button>
    </NavLink>
  </div>
</form>
</div>
</div>
      </div>

      {/* worker hiring form

  */}

      
      <UserHomeSectionFooter />
    </main>
  )
}
