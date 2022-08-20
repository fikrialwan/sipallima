import React from "react";
import "./style.css";

function DataRTRW(props) {
  return (
    <tr>
      <td>{props.jabatan}</td>
      <td>{props.nama}</td>
      <td>{props.alamat}</td>
    </tr>
  );
}

export default DataRTRW;
