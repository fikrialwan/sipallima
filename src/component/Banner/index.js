import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import banner from "./../../assets/img/bg2.jpg";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(237, 237, 237, 0), rgba(237, 237, 237, 0), rgba(237, 237, 237, 0), rgba(237, 237, 237, 0), rgba(237, 237, 237, 0), rgba(237, 237, 237, 0), rgba(237, 237, 237, 0.2) , #ededed), url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__body">
        <h1 className="banner__title">
          Sistem Informasi
          <br />
          Kelurahan Pal Lima
        </h1>
        <div className="button__row">
          <button>
            <Link className="button__link" to="/layanan">
              Layanan
            </Link>
          </button>
          <button>
            <Link className="button__link" to="/berita">
              Berita
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
