import axios from "axios";
import React from "react";
import "../../../styles/global/user global/UserLoginForm.css";
import UserAuthForm from "./UserAuthForm";
import UserAuthFormHeaderImage from "./UserAuthFormHeaderImage";
import UserLoginHeadline from "./UserAuthFormHeadline";
import UserAuthFormTextInputCredentials from "./UserAuthFormTextInputCredentials";
import UserForgetPasswordLink from "./UserForgetPasswordLink";
import UserLoginSideImage from "./UserLoginFormSideImage";
import UserLoginRegisterFormLink from "./UserLoginRegisterFormLink";
import { useNavigate } from "react-router-dom";
export default function UserLoginFormLayout() {
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

  const navigate = useNavigate();
  async function submitHandler(event){
    event.preventDefault()
    try{
      const {data} = await axios.post('http://localhost:8003/api/login', formData);
      console.log(data)
      if(data){
        localStorage.setItem("userInfo", JSON.stringify(data))
        alert("Login Successful");
        navigate('/users/homepage')
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
          <UserLoginSideImage />
        </div>
        <div className="col-lg-5 col-md-4 infinity-form-container">
          <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
            <UserAuthFormHeaderImage />
            <UserLoginHeadline headline="Login " />
            <UserAuthForm className="px-3" method="POST">
              {/* <!-- Input Box --> */}
              <UserAuthFormTextInputCredentials
                className="fa fa-envelope"
                type="email"
                name="email"
                placeholder="Email Address"
                tabIndex="10"
                value={formData.email}
                onChange={handleEvent}
              />
              <UserAuthFormTextInputCredentials
                className="fa fa-lock"
                type="password"
                name="password"
                placeholder="Password"
                tabIndex="10"
                value={formData.password}
                onChange={handleEvent}
              />

              {/* <!--Remember Checkbox --> */}
              <div class="row mb-3">
                <div class="col-auto d-flex align-items-center">
                  <div class="custom-control custom-checkbox">
                    {/* <UserLoginCheckBox
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox"
                      name="checkbox"
                    />
                    <UserLoginCheckBoxLabel
                      type="checkbox"
                      className="custom-control-input"
                      id="checkbox"
                      name="checkbox"
                      labelText="Remember Me ?"
                      checked={formData.checked}
                      onChange={handleEvent}
                    /> */}

                    {/* <label htmlFor="checkbox">Remember Me?</label> */}
                  </div>
                </div>
              </div>
              {/* <!-- Login Button --> */}
              <button
                onClick={submitHandler}
                type="submit"
                className="btn btn-block"
                style={{ textAlign: "centre", width: "100%" }}
              >
                {" "}
                Log in{" "}
              </button>
              {/* <!-- Forget Password --> */}
              <UserForgetPasswordLink
                redirectLink="/users/forgot-password"
                className="forget-link"
                linkText="Forgot password?"
              />
              {/* Other Credentials */}
              {/* <div className="text-center mb-2"> */}
              {/* <div className="text-center mb-3" style={{ color: "#777" }}>
                  or login with
                </div> */}
              {/* #Other Authentication links */}
              {/* <!-- Facebook Button --> */}
              {/* <UserAuthenticationLinks
                  redirectLink="facebook"
                  className="btn btn-social btn-facebook"
                  authenticationLinkText="Facebook"
                /> */}
              {/* <!-- Google Button --> */}
              {/* <UserAuthenticationLinks
                  redirectLink="google"
                  className="btn btn-social btn-google"
                  authenticationLinkText="Google"
                /> */}
              {/* <!-- Twitter Button --> */}
              {/* <UserAuthenticationLinks
                  redirectLink="twitter"
                  className="btn btn-social btn-twitter"
                  authenticationLinkText="Twitter"
                /> */}
              {/* </div> */}
              {/* #Registration link */}
              <UserLoginRegisterFormLink
                linkQueryText="Don't have an account?"
                registrationLinkText="Register here"
                redirectLink="/users/registration"
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
