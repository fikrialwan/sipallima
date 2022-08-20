import React from "react";
import Banner from "./../../component/Banner";
import Navbar from "./../../component/Navbar";
import BeritaContainer from "./../../component/BeritaContainer";
import request from "./../../request.js";
import "./style.css";

function Beranda() {
  return (
    <div className="beranda">
      <Navbar active="beranda" />
      <Banner />
      <BeritaContainer fetchUrl={request.berita} title="Berita" />
    </div>
  );
}

export default Beranda;
