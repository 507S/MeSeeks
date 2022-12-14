import React from "react";
import "../../../../styles/global/user global/aos.css";
import "../../../../styles/global/user global/font-awesome.min.css";
import "../../../../styles/global/user global/UserHomePageDesign.css";
// import { NavLink } from "react-router-dom";
// import ServiceSelectButtonImage from "../images/plus.png";
import UserCarouselSection from "../user home section/carousel section/UserCarouselSection";
import UserHomeSectionFooter from "../user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "../user home section/user navList section/UserNavList";
export default function Card({ name, from, type, weapon, img }) {
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
          Worker List
        </h1>
      </div>

      {/* user service section -- data fetched from database here
    --> your data in card goes here

    */}
      <div style={{ textAlign: "center", marginTop: "3%" }}></div>
      <section class="hero d-flex justify-content-center align-items-center">
        <div class="card" style={{ width: "18rem" }}>
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{from}</p>
            <p class="card-text">{type}</p>

            <p class="card-text">{weapon}</p>
          </div>
        </div>
      </section>
      <UserHomeSectionFooter />
    </main>
  );
}
