import React from "react";
import "./style.css";

function BeritaSlide(props) {
  return (
    <div className="berita__slide">
      <img src={props.img} alt={props.title} />
      <div>
        <span>{props.title}</span>
      </div>
    </div>
  );
}

export default BeritaSlide;
