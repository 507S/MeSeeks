import React from "react";
import { NavLink } from "react-router-dom";
import FooterImage from "../../images/l5.png";

export default function UserHomeSectionFooter() {
  return (
    <footer
      class="site-footer "
      // style={{ backgroundColor: "black", color: "white" }}
      style={{ fontSize: "16px", color: "white", marginTop: "5%" }}
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 class="text-white">
              <div class="contact-image">
                <img src={FooterImage} class="img-fluid" alt="footerImage" />
              </div>
            </h1>
          </div>

          <div class="col-lg-3 col-md-6 col-12">
            <h4 class="my-4">Contact Us</h4>

            <p class="mb-1">
              <i class="fa fa-phone mr-2 footer-icon"></i>
              &nbsp;+8801306989578
            </p>

            <p>
              <NavLink to="#">
                <i class="fa fa-envelope"></i>
                &nbsp; meseeks@bd.com
              </NavLink>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 col-12">
            <h4 class="my-4">Our Office</h4>

            <p class="mb-1">
              <i class="fa fa-home mr-2 footer-icon"></i>
              &nbsp;Sector #10, Road #11, Uttara, Dhaka, Bangladesh
            </p>
          </div>

          <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12">
            <p class="copyright-text">
              Copyright &copy; 2022 MeSeeks
              <br />
            </p>
          </div>

          <div class="col-lg-4 mx-lg-auto col-md-6 col-12">
            <ul class="footer-link">
              <li>
                <NavLink href="#">Our Founders</NavLink>
              </li>
              <li>
                <NavLink href="#"> Policy</NavLink>
              </li>
              <li>
                <NavLink href="#">FAQ</NavLink>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 mx-lg-auto col-md-6 col-12">
            <ul class="social-icon">
              <li>
                <NavLink href="#" className="fa fa-instagram"></NavLink>
              </li>
              <li>
                <NavLink href="#" className="fa fa-twitter"></NavLink>
              </li>
              <li>
                <NavLink href="#" className="fa fa-linkedin"></NavLink>
              </li>
              <li>
                <NavLink href="#" className="fa fa-facebook"></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
