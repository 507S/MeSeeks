import React from "react";
import "../../../styles/global/user global/UserLoginForm.css";
import UserAuthenticationLinks from "./UserAuthenticationLinks";
import UserAuthForm from "./UserAuthForm";
import UserAuthFormButton from "./UserAuthFormButton";
import UserAuthFormHeaderImage from "./UserAuthFormHeaderImage";
import UserAuthFormHeadline from "./UserAuthFormHeadline";
import UserAuthFormTextInputCredentials from "./UserAuthFormTextInputCredentials";

import UserLoginRegisterFormLink from "./UserLoginRegisterFormLink";

import UserRegistrationSideImage from "./UserRegistrationFormSideImage";
import axios from "axios"
//hello
export default function UserRegistrationFormLayout() {

  const[formData, setFormData] = React.useState({
    firstname:"",
    lastname:"",
    username:"",
    email: "",
    password: "",
    confirmPassword:"",
    rememberMe: "False",
  })

  function handleEvent(event){
      const {name, value, type, checked} = event.target;
      setFormData(prevState=>{
          return{
              ...prevState,
              [name] : type === "checkbox" ? checked : value
          }

      })
  }

  async function submitHandler(event){
      event.preventDefault()
      const response = await axios.post('http://localhost:1337/api/register', formData);
      // console.log(response)
      // const data = await response.json()
      // console.log(data)
      if(response.data){
          alert("success")
          window.location.href("/login")
      }
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-8 d-none d-md-block">
          <UserRegistrationSideImage />
        </div>
        <div className="col-lg-5 col-md-4 infinity-form-container">
          <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
            <UserAuthFormHeaderImage />
            <UserAuthFormHeadline headline="Create an account " />
            <UserAuthForm className="px-3" method="POST">
              {/* <!-- Input Box --> */}
              <input
                type = "text"
                placeholder="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleEvent}
            />
            <br/>
            <input
                type = "text"
                placeholder="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleEvent}
            />
            <br/>
            <input
                type = "text"
                placeholder="username"  
                name="username"
                value={formData.username}
                onChange={handleEvent}
            />
            <br/>
            <input
                type="email"
                placeholder="Enter Email"
                name = "email"
                value = {formData.email}
                onChange={handleEvent}
            />
            <br/>
            <input
                type = "password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleEvent}
            />
            <br/>
            <input
                type = "password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleEvent}
            />
            <br/>  
            <button onClick={submitHandler}>Register</button>
              {/* <UserAuthFormTextInputCredentials
                className="fa fa-envelope"
                type="email"
                name="email"
                placeholder="Email Address"
                tabIndex="10"
              />
              <UserAuthFormTextInputCredentials
                className="fa fa-phone "
                type="email"
                name="email"
                placeholder="Mobile Number"
                tabIndex="10"
                style={{ fontSize: "20px" }}
              />
              <UserAuthFormTextInputCredentials
                className="fa fa-lock"
                type="password"
                name="password"
                placeholder="Password"
                tabIndex="10"
              /> */}

              {/* <!--Remember Checkbox --> */}

              {/* <!-- Login Button --> */}
              {/* <UserAuthFormButton type="submit" buttonText="Register"/> */}

              {/* Other Credentials */}
              <div className="text-center mb-2">
                <div className="text-center mb-3" style={{ color: "#777" }}>
                  or login with
                </div>
                {/* #Other Authentication links */}
                {/* <!-- Facebook Button --> */}
                <UserAuthenticationLinks
                  redirectLink="facebook"
                  className="btn btn-social btn-facebook"
                  authenticationLinkText="Facebook"
                />
                {/* <!-- Google Button --> */}
                <UserAuthenticationLinks
                  redirectLink="google"
                  className="btn btn-social btn-google"
                  authenticationLinkText="Google"
                />
                {/* <!-- Twitter Button --> */}
                <UserAuthenticationLinks
                  redirectLink="twitter"
                  className="btn btn-social btn-twitter"
                  authenticationLinkText="Twitter"
                />
              </div>
              {/* #Registration link */}
              <UserLoginRegisterFormLink
                linkQueryText="Already have an account?"
                registrationLinkText="Login here"
                redirectLink="/users/login"
              />
            </UserAuthForm>
          </div>
          {/* <!-- FORM END --> */}
        </div>
        {/* <!-- FORM CONTAINER END --> */}
      </div>
    </div>
  );
}
