import React from "react";
import "../../../styles/global/user global/aos.css";
import "../../../styles/global/user global/font-awesome.min.css";
import "../../../styles/global/user global/UserHomePageDesign.css";
import UserCarouselSection from "./user home section/carousel section/UserCarouselSection";
import UserHomeSectionFooter from "./user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "./user home section/user navList section/UserNavList";
import UserFAQItems from "./UserFAQItems";
export default function UserFAQPageLayout() {
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
        <h3
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginBottom: "10%",
            color: "#f1c111",
          }}
        >
         FAQ
        </h3>
      </div>

      <section class="hero d-flex justify-content-center align-items-center">
        <div class="container" style={{textAlign:"justify"}}>
            <UserFAQItems />
            </div>
            </section>

      <UserHomeSectionFooter />
    </main>
  );
}
