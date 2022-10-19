import React from "react";
import "../../../styles/global/user global/UserLoginForm.css";
import UserAuthForm from "./UserAuthForm";
import UserAuthFormButton from "./UserAuthFormButton";
import UserAuthFormHeaderImage from "./UserAuthFormHeaderImage";
import UserAuthFormHeadline from "./UserAuthFormHeadline";
import UserAuthFormTextInputCredentials from "./UserAuthFormTextInputCredentials";

import UserLoginRegisterFormLink from "./UserLoginRegisterFormLink";

import axios from "axios";
import UserRegistrationSideImage from "./UserRegistrationFormSideImage";
import { useNavigate } from "react-router-dom";

export default function UserRegistrationFormLayout() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleEvent(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
 
  const navigate = useNavigate();
  async function submitHandler(event){
    event.preventDefault()
    try{
      const {data} = await axios.post('http://localhost:1337/api/register', formData);
      console.log(data)
      if(data){
        alert("Login Successful");
        navigate('/users/login')
      }
    }
    catch(e)
    {
      alert(e.response.data)
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
              <UserAuthFormTextInputCredentials
                type="text"
                placeholder="First Name"
                name="firstname"
                className="fa fa-address-book"
                tabIndex="10"
                value={formData.firstname}
                onChange={handleEvent}
              />
              <br />
              <UserAuthFormTextInputCredentials
                type="text"
                placeholder="Last Name"
                name="lastname"
                className="fa fa-address-card"
                tabIndex="10"
                value={formData.lastname}
                onChange={handleEvent}
              />
              <br />
              <UserAuthFormTextInputCredentials
                type="text"
                placeholder="username"
                name="username"
                className="fa fa-user"
                tabIndex="10"
                value={formData.username}
                onChange={handleEvent}
              />
              <br />
              <UserAuthFormTextInputCredentials
                type="email"
                placeholder="Enter Email"
                name="email"
                tabIndex="10"
                className="fa fa-envelope"
                value={formData.email}
                onChange={handleEvent}
              />
              <br />
              <UserAuthFormTextInputCredentials
                type="password"
                placeholder="Enter Password"
                name="password"
                className="fa fa-lock"
                tabIndex="10"
                value={formData.password}
                onChange={handleEvent}
              />
              <br />
              <UserAuthFormTextInputCredentials
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="fa fa-eye-slash"
                tabIndex="10"
                value={formData.confirmPassword}
                onChange={handleEvent}
              />
              <br />
              {/* <button onClick={submitHandler}>Register</button>
            <br/> */}

              {/* <!--Remember Checkbox --> */}

              {/* <!-- Login Button --> */}
              <UserAuthFormButton
                type="submit"
                buttonText="Register"
                onClick={submitHandler}
              />

              {/* Other Credentials */}
              <div className="text-center mb-2">
                {/* #Other Authentication links */}
                {/* <!-- Facebook Button --> */}

                {/* <!-- Google Button --> */}

                {/* <!-- Twitter Button --> */}
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
