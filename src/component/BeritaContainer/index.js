import React, { useEffect, useState } from "react";
import Berita from "./../Berita";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

function BeritaContainer(props) {
  const [berita, setBerita] = useState([]);
  // const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchUrl() {
      const request = await axios.get(props.fetchUrl);
      setBerita(request.data);
      return request;
    }
    fetchUrl();
  }, [props.fetchUrl]);

  return (
    <div className="berita__container">
      <div className="title__row">
        <div className="title">
          <h1 className="berita__container__title">{props.title}</h1>
        </div>
        <Link to="/berita" className="lihat__semua">
          <h5>Lihat semua</h5>
        </Link>
      </div>
      <div className="berita__row">
        {berita.map((content, key) =>
          key < 11 ? (
            <Link
              key={key}
              to={`/berita/detail?id=${content.id}`}
              className="link"
            >
              <Berita
                key={key}
                title={content.judul}
                img={`http://pallima.bemfmipauntan.org/upload/foto/${content.cover}`}
              />
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

export default BeritaContainer;
