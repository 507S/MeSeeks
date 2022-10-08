import React from "react";
import AdminRegistrationSideImage from "../../../assets/admin assets/adminRegistrationSideImage.jpg";
export default function AdminRegistrationFormSideImage() {
  return (
    <div class="col-sm-8 px-0 d-none d-sm-block">
      <img
        src={AdminRegistrationSideImage}
        alt="adminRegistrationSideImage"
        class="login-img"
      />
    </div>
  );
}
