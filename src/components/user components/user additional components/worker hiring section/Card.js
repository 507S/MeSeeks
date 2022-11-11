import React from "react";

export default function Card({ name, from, type, weapon, img }) {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{from}</p>
        <p class="card-text">{type}</p>

        <p class="card-text">{weapon}</p>
      </div>
    </div>
  );
}
