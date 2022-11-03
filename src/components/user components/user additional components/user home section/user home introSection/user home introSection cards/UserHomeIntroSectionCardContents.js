import React from "react";

export default function UserHomeIntroSectionCardContents({
  cardText,
  cardTitle,
  imageSrc,
  ...rest
}) {
  return (
    <div class="col-lg-4">
      {/* <img
        src="./images/hw-modified.png"
        width="60%"
        height="60%"
        alt="homeSectionIntroCardImage"
      /> */}
      <h2 style={{ marginTop: "42px", textAlign: "justify" }}>{cardTitle}</h2>
      <p>{cardText}</p>
    </div>
  );
}
