import React from "react";
import Navbar from "../../component/Navbar";
import "./style.css";

function UnderCons(props) {
  return (
    <div className="under__cons">
      <Navbar active={props.active} />
      <div className="row">
        <h1 className="text__under__cons">
          Halaman {props.active} dalam proses pembuatan
        </h1>
      </div>
    </div>
  );
}

export default UnderCons;
