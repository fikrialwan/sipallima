import React from "react";
import "./style.css";

function BeritaComp(props) {
  const body = (title, n) => {
    return title?.length > n ? title.substr(0, n - 1) + "..." : title;
  };
  return (
    <div className="berita__comp">
      <img src={props.img} alt={props.title} />
      <div>
        <h1>{props.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: body(props.body, 120) }}></p>
      </div>
    </div>
  );
}

export default BeritaComp;
