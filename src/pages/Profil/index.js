import React, { useState, useEffect } from "react";
import Navbar from "./../../component/Navbar";
import "./style.css";
// import struktur from "./../../assets/img/struktur.png";
import axios from "axios";

function Profil(props) {
  const [profil, setProfil] = useState([]);
  useEffect(() => {
    async function fetchUrl() {
      const requestProfil = await axios.get(props.request.profil);
      setProfil(requestProfil.data);
      return requestProfil;
    }
    fetchUrl();
  }, [props.request]);
  return (
    <div className="profil">
      <Navbar active="profil" />
      {profil.map((prof, key) => (
        <div className="body__profil" key={key}>
          <h1>Profil</h1>
          <p
            dangerouslySetInnerHTML={{ __html: prof.profil }}
          >
            {/* {prof.profil} */}
          </p>
          <h1>Struktur Organisasi</h1>
          <img
            src={`https://pallima.floodewsptk.my.id/upload/foto/${prof.struktur}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Profil;
