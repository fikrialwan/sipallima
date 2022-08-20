import React from "react";
import "./style.css";

function ContentLayanan(props) {
  return (
    <div className="content__layanan">
      <h1>{props.content.nama}</h1>
      <span dangerouslySetInnerHTML={{ __html: props.content.syarat }}></span>
    </div>
  );
}

export default ContentLayanan;
