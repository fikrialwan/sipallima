import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="kontak__kami">
          <h1 className="footer__title">Kontak Kami</h1>
          <p className="footer__des">
            <Link to="/" className="footer__link">
              https://kel-pallima.pontianakkota.go.id/
            </Link>
            <br />
            Jl. Husein Hamzah No.2, Pal Lima
            <br />
            Kec. Pontianak Barat, Kota Pontianak, 78113
            <br />
            Pontianak Kalimantan Barat
          </p>
        </div>
        <div className="telpon__penting">
          <h1 className="footer__title">No Telepon Penting</h1>
          <p className="footer__des">
            UPK PUSKESMAS PAL V || 0561-778957
            <br />
            Pemadam Kebakaran Swadesi Borneo || 0561-7955569
            <br />
            Polresta Pontianak || 0561-734900
            <br />
            RS KOTA || 0229299192
          </p>
        </div>
        <div className="lokasi">
          <h1 className="footer__title">Lokasi Kami</h1>
          <p className="footer__des">
            <iframe
              title="myMaps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8174915983195!2d109.28635651445356!3d-0.03692933554880327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d592a2e37369f%3A0xf81b66b5bb841b81!2sKantor%20Lurah%20Pal%20V!5e0!3m2!1sid!2sid!4v1597718718979!5m2!1sid!2sid"
              width="270"
              height="150"
              frameBorder="0"
              aria-hidden="false"
              className="footer__maps"
            ></iframe>
          </p>
        </div>
      </div>
      <p className="copyright">© Copyright 2020. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
