import React from "react";
import DataNum from "./../DataNum";
import "./style.css";

function DataNums() {
  const dataNums = [
    {
      total: "97",
      ket: "Penerima Bantuan PKH",
    },
    {
      total: "97",
      ket: "Penerima Bantuan Beras",
    },
    {
      total: "249",
      ket: "Kepala Keluarga",
    },
  ];
  return (
    <div className="data__nums">
      <h1 className="data__nums__title">
        Data Kelurahan
        <br />
        Pal Lima
      </h1>
      <div className="data__nums__container">
        {dataNums.map((dataNum, key) => (
          <DataNum key={key} total={dataNum.total} ket={dataNum.ket} />
        ))}
      </div>
    </div>
  );
}

export default DataNums;
