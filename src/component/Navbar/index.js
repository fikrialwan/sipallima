import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import icon from "./../../assets/img/icon.png";

function Navbar(props) {
  const [isToggle, setIsToggle] = useState(false);
  // const [isShow, setIsShow] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 90) {
  //       setIsShow(true);
  //     } else setIsShow(false);
  //   });
  // }, []);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar__icon">
          <img src={icon} alt="icon pemerintah pontianak" />
          <h1>
            Sistem Informasi
            <br />
            Kelurahan Pallima
          </h1>
        </div>
        <div className="navbar__menu">
          <ul>
            <li className={`${props.active === "beranda" ? "active" : null}`}>
              <Link to="/" className="link">
                Beranda
              </Link>
            </li>
            <li className={`${props.active === "profil" ? "active" : null}`}>
              <Link to="/profil" className="link">
                Profil
              </Link>
            </li>
            <li className={`${props.active === "layanan" ? "active" : null}`}>
              <Link to="/layanan" className="link">
                Layanan
              </Link>
            </li>
            <li className={`${props.active === "berita" ? "active" : null}`}>
              <Link to="/berita" className="link">
                Berita
              </Link>
            </li>
            <li className={`${props.active === "data" ? "active" : null}`}>
              Data &#x25BE;
              <ul>
                <li>
                  <Link to="/data?data=RT dan RW" className="link">
                    RT dan RW
                  </Link>
                </li>
                <li>
                  <Link to="/data?data=Sekolah" className="link">
                    Sekolah
                  </Link>
                </li>
                <li>
                  <Link to="/data?data=Posyandu" className="link">
                    Posyandu
                  </Link>
                </li>

                <li>
                  <Link to="/data?data=Tempat Ibadah" className="link">
                    Tempat Ibadah
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="burger" onClick={() => handleToggle()}>
            <div className={isToggle ? "line1" : null}></div>
            <div className={isToggle ? "line2" : null}></div>
            <div className={isToggle ? "line3" : null}></div>
          </div>
        </div>
      </nav>
      <div
        className={`navbar__menu__mobile ${isToggle ? "navbar__active" : null}`}
      >
        <ul>
          <li>
            <Link to="/" className="link">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/profil" className="link">
              Profil
            </Link>
          </li>
          <li>
            <Link to="/layanan" className="link">
              Layanan
            </Link>
          </li>
          <li>
            <Link to="/berita" className="link">
              Berita
            </Link>
          </li>
          <li>
            &#x25BE; Data
            <ul>
              <li>
                <Link to="/data?data=RT dan RW" className="link">
                  RT dan RW
                </Link>
              </li>
              <li>
                <Link to="/data?data=Sekolah" className="link">
                  Sekolah
                </Link>
              </li>
              <li>
                <Link to="/data?data=Posyandu" className="link">
                  Posyandu
                </Link>
              </li>

              <li>
                <Link to="/data?data=Tempat Ibadah" className="link">
                  Tempat Ibadah
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Navbar;
