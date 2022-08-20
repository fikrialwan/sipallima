import React from "react";
import "./style.css";

function Berita(props) {
  const title = (title, n) => {
    return title?.length > n ? title.substr(0, n - 1) + "..." : title;
  };
  return (
    <div className="berita">
      <img className="img__berita" src={props.img} alt={props.title} />
      <h1 className="title__berita">{title(props.title, 100)}</h1>
    </div>
  );
}

export default Berita;
