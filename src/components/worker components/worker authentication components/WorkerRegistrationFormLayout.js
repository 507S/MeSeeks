import React from "react";
import "../../../styles/global/worker global/WorkerLoginForm.css";
import WorkerAuthForm from "./WorkerAuthForm";
import WorkerAuthFormButton from "./WorkerAuthFormButton";
import WorkerAuthFormTextInputCredentials from "./WorkerAuthFormTextInputCredentials";
import WorkerAuthFormTitle from "./WorkerAuthFormTitle";
import WorkerLoginRegistrationRedirectLink from "./WorkerLoginRegistrationRedirectLink";
import WorkerRegistrationFormImage from "./WorkerRegistrationFormImage";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
export default function WorkerLoginFormLayout() {
    const navigate = useNavigate()
    const[formData, setFormData] = React.useState({
      firstname:"",
      lastname:"",
      username:"",
      email: "",
      password: "",
      confirmPassword:"",
      phoneNumber:"",
      location:"",
      profession:"",
  })

  function handleEvent(event){
      const {name, value, type, checked} = event.target;
      console.log(name, value)
      setFormData(prevState=>{
          return{
              ...prevState,
              [name] : type === "checkbox" ? checked : value
          }

      })
  }

  async function submitHandler(event){
      event.preventDefault()
      try{
        const {data} = await axios.post('http://localhost:8003/api/registerWorker', formData);
        console.log(data)
        if(data){
          alert("Registration Successful");
          navigate('/workers/login')
        }
      }
      catch(e)
      {
        alert(e.response.data)
      }
  }
  return (
    <div className="Main-container">
      <div className="container-login">
        <div className="wrap-login">
          <WorkerRegistrationFormImage />
          <WorkerAuthForm className="login-form">
            <WorkerAuthFormTitle workerAuthFormTitleText="Registration" />
            <WorkerAuthFormTextInputCredentials
              type="text"
              name="firstname"
              placeholder="First Name"
              inputFieldIconClassName="fa fa-user-circle"
              value={formData.firstname}
              onChange={handleEvent}
            />
            <WorkerAuthFormTextInputCredentials
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-user-circle"
            />
            <WorkerAuthFormTextInputCredentials
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-user-circle"
            />
            <WorkerAuthFormTextInputCredentials
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-envelope"
            />
            <WorkerAuthFormTextInputCredentials
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-phone"
            />
            <WorkerAuthFormTextInputCredentials
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-lock"
            />
            <WorkerAuthFormTextInputCredentials
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-lock"
            />
            <br />
            <WorkerAuthFormTextInputCredentials
              type="text"
              name="location"
              placeholder="Where do you Live?"
              value={formData.location}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-lock"
            />
            <WorkerAuthFormTextInputCredentials
              type="text"
              name="profession"
              placeholder="What do you do?"
              value={formData.profession}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-lock"
            />
            <WorkerAuthFormButton
              workerAuthFormButtonText="Registration"
              workerAuthFormButtonIconClassName="fa fa-unlock-alt"
              workerAuthFormButtonType="submit"
              type="submit"
              buttonText="Register"
              onClick={submitHandler}
              />
            {/* <WorkerAuthFormForgetPasswordLink
              redirectLink="#"
              redirectLinkHeadline="Forgot "
              redirectLinkText="Password ?"
            /> */}
            <WorkerLoginRegistrationRedirectLink
              redirectLink="/workers/login"
              redirectLinkText="Already have an account ?"
              redirectLinkIconClassName="fa fa-key"
            />
          </WorkerAuthForm>
        </div>
      </div>
    </div>
  );
}
