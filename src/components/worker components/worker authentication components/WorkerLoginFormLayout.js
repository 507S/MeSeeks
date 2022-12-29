import React from "react";
import "../../../styles/global/worker global/WorkerLoginForm.css";
import WorkerAuthForm from "./WorkerAuthForm";
import WorkerAuthFormButton from "./WorkerAuthFormButton";
import WorkerAuthFormForgetPasswordLink from "./WorkerAuthFormForgetPasswordLink";
import WorkerAuthFormTextInputCredentials from "./WorkerAuthFormTextInputCredentials";
import WorkerAuthFormTitle from "./WorkerAuthFormTitle";
import WorkerLoginFormImage from "./WorkerLoginFormImage";
import WorkerLoginRegistrationRedirectLink from "./WorkerLoginRegistrationRedirectLink";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function WorkerLoginFormLayout() {
  let userInfo = false

    if (localStorage.getItem("userInfo")) {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    const uid = userInfo.id
  const[formData, setFormData] = React.useState({
    email: "",
    password: "",
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

  const navigate = useNavigate();
  async function submitHandler(event){
    event.preventDefault()
    try{
      const {data} = await axios.post(`http://localhost:8003/api/loginWorker`, formData);
      console.log(data)
      if(data){
        localStorage.setItem("userInfo", JSON.stringify(data))
        alert("Login Successful");
        navigate(`/worker-dashboard/${uid}`)
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
          <WorkerLoginFormImage />
          <WorkerAuthForm className="login-form">
            <WorkerAuthFormTitle workerAuthFormTitleText="Login" />
            <WorkerAuthFormTextInputCredentials
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-envelope"
            />
            <WorkerAuthFormTextInputCredentials
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleEvent}
              inputFieldIconClassName="fa fa-lock"
            />
            <WorkerAuthFormButton
              workerAuthFormButtonText="Login"
              workerAuthFormButtonIconClassName="fa fa-key"
              workerAuthFormButtonType="submit"
              onClick={submitHandler}
            />
            <WorkerAuthFormForgetPasswordLink
              redirectLink="/workers/forget-password"
              redirectLinkHeadline="Forgot "
              redirectLinkText="Password ?"
            />
            <WorkerLoginRegistrationRedirectLink
              redirectLink="/workers/registration"
              redirectLinkText="Create Your Account"
              redirectLinkIconClassName="fa fa-unlock"
            />
          </WorkerAuthForm>
        </div>
      </div>
    </div>
  );
}
