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

    <div class="col-12">
    <label for="rating" class="form-label"><i className='fa fa-star'></i>&nbsp;Provide Rating <b style={{color:"red",fontWeight:"100px"}}>*(between 1 and 5)</b> </label>
    <input type="number" 
    min="1" 
    max="5"
    // value={formData.workerType}
    // onChange={handleEvent}
    class="form-control" 
    
    id="customRange2" 
    required
    >
      
    </input>
    </div>
 
  <div class="col-12">
     <label for="userReview" class="form-label"  ><i className='fa fa-comments'></i>&nbsp;Provide us your review</label>
     <div class="form-floating">
     <textarea class="form-control" 
      id="floatingTextarea2" 
          // value={formData.workerType}
    // onChange={handleEvent}
      style={{height: "100px",resize:"none"}}></textarea>
      <label for="floatingTextarea2">Your Feedback...</label>
  </div>
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
