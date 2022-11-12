/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import "../../../../styles/global/user global/aos.css";
// import "../../../../styles/global/user global/bootstrap.min.css";
// import "../../../../styles/global/user global/font-awesome.min.css";
// import "../../../../styles/global/user global/owl.carousel.min.css";
// import "../../../../styles/global/user global/owl.theme.default.min.css";
// import "../../../../styles/global/user global/welcome.css";
import UserNavLinkLists from "../../user navBar components/UserNavLinkLists";
export default function HomeTesta() {
  return (
    <>
      {/* <nav
        class="navbar navbar-expand-lg sticky-top"
        style={{
          background: "#0c8195",
          zIndex: "2",
          top: 0,
          right: 0,
          left: 0,
          padding: " 1.5em",
        }}
      >
        <div class="container">
          <a class="navbar-brand" href="">
            <img
              src="../../../../assets/user assets/userNavLogo.png"
              width="80px"
              height="80px"
              style={{
                color: "#ffffff",
                fontSize: "32px",
                backgroundColor: "transparent",
              }}
              alt=""
            />
            MeSeeks
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="./index.html" class="nav-link smoothScroll">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="./service.html" class="nav-link smoothScroll">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link smoothScroll">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link smoothScroll">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a href="#about" class="nav-link smoothScroll">
                  Help
                </a>
              </li>

              <li class="nav-item">
                <a href="contact.html" class="nav-link contact">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link contact">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <UserNavLinkLists userNavCompanyTitle="MeSeeks" />

      {/* <!-- HERO --> */}

      {/* footer */}
      {/* <footer class="site-footer">
        <div class="container">
          <div class="row">
            <UserHomeFooterCards />
          </div>
        </div>
      </footer> */}
    </>
  );
}
