import React from 'react';
import "../../../styles/global/user global/aos.css";
import "../../../styles/global/user global/font-awesome.min.css";
import "../../../styles/global/user global/UserHomePageDesign.css";
import UserCarouselSection from '../user additional components/user home section/carousel section/UserCarouselSection';
import UserHomeSectionFooter from "../user additional components/user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "../user additional components/user home section/user navList section/UserNavList";

export default function UserUpdateProfileLayout() {
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
         Update Profile 
        </h3>
      </div>

      <div className="container mt-7 ">
      <div class="card">
      <div class="card-body">

      <form class="row g-3" 
      // onSubmit={handleSubmit}
      >
      <div class="col-md-6">
      <label for="username" class="form-label"><i className='fa fa-user'></i>&nbsp;Username</label>
      <input type="text" 
      //  value={formData.workerType}
      //  onChange={handleEvent}
      class="form-control" 
      
      />
    </div>
     <div class="col-md-6">
      <label for="email" class="form-label"><i className='fa fa-wrench'></i>&nbsp;Email</label>
      <input type="email" 
      // value={formData.workerType}
      // onChange={handleEvent}
      class="form-control" 
      
    />
      </div>
   
    <div class="col-md-6">
    <label for="location" class="form-label"><i className='fa fa-map-marker'></i>&nbsp;Location</label>
    <input type="text" 
    // value={formData.workerType}
    // onChange={handleEvent}
    class="form-control" 
    id="inputAddress" 
    placeholder="Location"

    />
    </div>
    <div class="col-md-6">
    <label for="address" class="form-label"><i className='fa fa-home'></i>&nbsp;Address</label>
    <input type="text" 
    // value={formData.workerType}
    // onChange={handleEvent}
    class="form-control" 
    id="inputAddress" 
    placeholder="Address" 

    />

  </div>
  <div class="col-md-6">
    <label for="address" class="form-label"><i className='fa fa-picture-o'></i>&nbsp;Choose Avatar</label>
    <div class="mb-3">
  {/* <label for="formFile" class="form-label">Default file input example</label> */}
  <input class="form-control" type="file" id="formFile" />
</div>

  </div>

  
  <button 
      // onClick={handleSubmit} 
      class="btn btn-info w-100 ">
      <i className="fa fa-wrench"></i>
      &nbsp;Confirm Update </button>
                    {/* </div> */}
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
