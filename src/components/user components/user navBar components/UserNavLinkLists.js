import React from "react";
import { NavLink } from "react-router-dom";
import UserNavCompanyImage from "../../../assets/user assets/userNavLogo.png";
import UserNavLinkContents from "./UserNavLinkContents";
export default function UserNavLinkLists({
  userNavCompanyTitle,
  userNavCompanyLink,
  ...rest
}) {
  return (
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <NavLink
          class="navbar-brand"
          style={{
            background: "#0c8195",
            zIndex: "2",
            top: 0,
            right: 0,
            left: 0,
            padding: " 1.5em",
          }}
          to={userNavCompanyLink}
        >
          <img
            src={UserNavCompanyImage}
            width="80px"
            height="80px"
            style={{
              color: "#ffffff",
              fontSize: "32px",
              backgroundColor: "transparent",
            }}
            alt="userNavCompanyImage"
          />
          {userNavCompanyTitle}
        </NavLink>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <UserNavLinkContents userNavLink="" userNavLinkText="Home" />
            <UserNavLinkContents userNavLink="" userNavLinkText="Services" />
            <UserNavLinkContents userNavLink="" userNavLinkText="About" />
            <UserNavLinkContents userNavLink="" userNavLinkText="Contact" />
            <UserNavLinkContents userNavLink="" userNavLinkText="Help" />
            <UserNavLinkContents
              userNavLink="/users/login"
              userNavLinkText="Login"
            />
            <UserNavLinkContents
              userNavLink="/users/registration"
              userNavLinkText="Register"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
