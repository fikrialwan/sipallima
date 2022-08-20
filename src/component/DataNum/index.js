import React from "react";
import "./style.css";

function DataNum(props) {
  return (
    <div className="data__num">
      <h1 className="data__num__total">{props.total}</h1>
      <p className="data__nums__ket">{props.ket}</p>
    </div>
  );
}

export default DataNum;
