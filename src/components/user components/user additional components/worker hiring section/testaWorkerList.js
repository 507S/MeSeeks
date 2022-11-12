/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "../../../../styles/global/user global/aos.css";
import "../../../../styles/global/user global/font-awesome.min.css";
import "../../../../styles/global/user global/UserHomePageDesign.css";

import { NavLink } from "react-router-dom";
// import ServiceSelectButtonImage from "../images/plus.png";
import UserCarouselSection from "../user home section/carousel section/UserCarouselSection";
import UserHomeSectionFooter from "../user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "../user home section/user navList section/UserNavList";
export default function UserServicePageLayout() {
  return (
    <main>
      <header
        class="p-3  text-white fixed-top  "
        style={{ background: "#057a8d" }}
      >
        <div class="container mt-3">
          <UserNavList />
        </div>
      </header>
      <hr />
      <UserCarouselSection />

      <div class="container marketing">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginBottom: "10%",
            color: "#f1c111",
          }}
        >
          Our Services
        </h1>
      </div>

      {/* user service section -- data fetched from database here
      --> your data in card goes here

      */}
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <button class="custom-service-btn btn-bg btn ">
          {/* comes from db */}
          Home and Office Appliances
        </button>
      </div>
      <section class="hero d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                {/* comes from db */}
                <img
                  src={ElectricianImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="ElectricianImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">
                    {/* comes from db */}
                    Electrician
                  </h5>
                  <p class="card-text  text-center">
                    {/* comes from db */}
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    {/* comes from db */}
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer ">
                  <h3 className="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={CarpenterImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="CarpenterImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Carpenter</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 className="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={GlassCleanerImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="GlassCleanerImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Electrician</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <button class="custom-service-btn btn-bg btn mt-3">
          Construction Site Works
        </button>
      </div>
      <section class="hero d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={GlazierImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="GlazierImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Glazier</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={TileSetterImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="TileSetterImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Tile Setter</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={FlooringInstaller}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="FlooringInstaller"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Flooring installer</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <button class="custom-service-btn btn-bg btn mt-3">
          Car Maintenance Works
        </button>
      </div>
      <section class="hero d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={CarWasherImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="CarWasherImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Car Washer</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={OilChangerImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="OilChangerImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Oil Changer</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={BatteryReplacerImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="BatteryReplacerImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Battery Replacer</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <NavLink to="/users/worker-hiring-form">
                    <button
                      type="submit"
                      class="btn btn-info text-white"
                      style={{
                        width: "100%",
                        fontSize: "20px",
                        backgroundColor: "#057a8d",
                      }}
                    >
                      <img
                        src={ServiceSelectButtonImage}
                        alt="ServiceSelectButtonImage"
                        width="30px"
                      />
                      &nbsp;Select
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <UserHomeSectionFooter />
    </main>
  );
}
