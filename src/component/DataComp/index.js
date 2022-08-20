import React from "react";
import "./style.css";

function DataComp(props) {
  return (
    // <div className="data__comp">
    //   {props.data === "Sekolah" ? null : (
    //     <img
    //       src={`http://127.0.0.1:8000/upload/foto/${props.img}`}
    //       alt="nama"
    //     />
    //   )}
    //   <div>
    //     <p>
    //       Nama : <span>{props.nama}</span>
    //       <br />
    //       Alamat : <span>{props.alamat}</span>
    //     </p>
    //   </div>
    // </div>
    <tr>
      <td>{props.nama}</td>
      <td>{props.alamat}</td>
      {props.data === "Sekolah" ? null : (
        <td>
          <img
            src={`http://pallima.bemfmipauntan.org/upload/foto/${props.img}`}
            alt="nama"
          />
        </td>
      )}
    </tr>
  );
}

export default DataComp;
