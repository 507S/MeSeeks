import React from "react";
import AdminLoginSideImage from "../../../assets/admin assets/adminLoginSideImage.jpg";
export default function AdminLoginFormSideImage() {
  return (
    <div class="col-sm-8 px-0 d-none d-sm-block">
      <img
        src={AdminLoginSideImage}
        alt="adminLoginSideImage"
        class="login-img"
      />
    </div>
  );
}
