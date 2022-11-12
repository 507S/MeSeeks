import React from "react";
import "../../../../styles/global/user global/aos.css";
// import "../../../../styles/global/user global/UserLoginForm.css";
import "../../../../styles/global/worker global/WorkerProfileDynamicInputFieldStyle.css";
import UserCarouselSection from "../user home section/carousel section/UserCarouselSection";
import UserHomeSectionFooter from "../user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "../user home section/user navList section/UserNavList";
import ActionButton from "./ActionButton";
import CancelButton from "./CancelButton";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

export default function UserWorkerHiringFormLayout() {
  // copied from user login auth form page
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    checkbox: "False",
  });

  function handleEvent(event) {
    const { name, value, type, checked } = event.target;
    console.log(name, value);
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleEvent(event) {
    const { name, value, type, checked } = event.target;
    console.log(name, value);
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // async function submitHandler(event){
  //   event.preventDefault()
  //   try{
  //     const {data} = await axios.post('http://localhost:8003/api/login', formData);
  //     console.log(data)
  //     if(data){
  //       localStorage.setItem("userInfo", JSON.stringify(data))
  //       alert("Login Successful");
  //       navigate('/users/homepage')
  //     }
  //   }
  //   catch(e)
  //   {
  //     alert(e.response.data)
  //   }
  // }

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
          Provide Worker Hiring Credentials
        </h3>
      </div>

      {/* worker hiring form

    */}

      <div className="container ">
        <section class="hero d-flex justify-content-center align-items-center">
          <form class="row g-3 " action="post">
            <TextInput
              labelFor="username"
              labelIconClassName="fa fa-user"
              labelName="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleEvent}
              // placeholder="Username..."
            />
            <TextInput
              labelFor="email"
              labelIconClassName="fa fa-envelope"
              labelName="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleEvent}
              // placeholder="Email..."
            />
            <TextInput
              labelFor="phoneNumber"
              labelIconClassName="fa fa-phone"
              labelName="Phone Number"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleEvent}
            />

            <DateInput
              labelName="Choose Hiring Date"
              name="hiringDate"
              type="date"
              labelIconClassName="fas fa-calendar-alt"
              // value="startDate"
              minDateInCalender="2001-01-01"
              maxDateInCalender="2050-01-01"
              value={formData.hiringDate}
              onChange={handleEvent}
            />
            <SelectInput
              labelFor="workingShift"
              labelIconClassName="fa fa-clock-o"
              labelName="Select Working Shift"
              selectNamesFetchedFromDatabase="Day"
              value={formData.workingShift}
              onChange={handleEvent}
            />

            <TextAreaInput
              labelFor="workingDetails"
              labelIconClassName="fas fa-briefcase"
              labelName="Working Details"
              textInputRow="3"
              type="text"
              name="workingDetails"
              value={formData.workingDetails}
              onChange={handleEvent}
              placeholder="Provide Working Details..."
            />
            <TextAreaInput
              labelFor="address"
              labelIconClassName="fa fa-home"
              labelName="Address"
              textInputRow="3"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleEvent}
              placeholder="Your Address..."
            />
            <div className="col-md-6 mt-3">
              <ActionButton
                type="submit"
                workerProfileActionButtonIcon="fa fa-check"
                workerProfileActionButtonText="Submit "
                btnClassName="btn btn-info w-100"
                // onClick={submitHandler}
              />
            </div>
            <div className="col-md-6 mt-3">
              <CancelButton
                type="submit"
                workerProfileActionButtonIcon="fa fa-arrow-left"
                workerProfileActionButtonText="Go Back "
                btnClassName="btn btn-dark w-100"

                //no need onClick={submitHandler} redirected back to  the service page
              />
            </div>
          </form>
        </section>
      </div>
      <UserHomeSectionFooter />
    </main>
  );
}
