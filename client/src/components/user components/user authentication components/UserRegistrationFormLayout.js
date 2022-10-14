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
      try{
          const response = await axios.post('http://localhost:1337/api/register', formData);
          if(response.data){
            alert("success")
            window.location.href("/login")
        } 
      }
      catch(err){
        console.log(err.response.data)
        alert(err.response.data)
      }
      // console.log(response)
      // const data = await response.json()
      // console.log(data)
      
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
              <UserAuthFormTextInputCredentials
                type = "text"
                placeholder="First Name"
                name="firstname"
                tabIndex="10"
                value={formData.firstname}
                onChange={handleEvent}
            />
            <br/>
            <UserAuthFormTextInputCredentials
                type = "text"
                placeholder="Last Name"
                name="lastname"
                tabIndex="10"
                value={formData.lastname}
                onChange={handleEvent}
            />
            <br/>
            <UserAuthFormTextInputCredentials
                type = "text"
                placeholder="username"  
                name="username"
                tabIndex="10"
                value={formData.username}
                onChange={handleEvent}
            />
            <br/>
            <UserAuthFormTextInputCredentials
                type="email"
                placeholder="Enter Email"
                name = "email"
                tabIndex="10"
                value = {formData.email}
                onChange={handleEvent}
            />
            <br/>
            <UserAuthFormTextInputCredentials
                type = "password"
                placeholder="Enter Password"
                name="password"
                tabIndex="10"
                value={formData.password}
                onChange={handleEvent}
            />
            <br/>
            <UserAuthFormTextInputCredentials
                type = "password"
                placeholder="Confirm Password"
                name="confirmPassword"
                tabIndex="10"
                value={formData.confirmPassword}
                onChange={handleEvent}
            />
            <br/>  
            {/* <button onClick={submitHandler}>Register</button>
            <br/> */}

              {/* <!--Remember Checkbox --> */}

              {/* <!-- Login Button --> */}
              <UserAuthFormButton type="submit" buttonText="Register" onClick={submitHandler}/>

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
