import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import BeritaSlide from "../../component/BeritaSlide";
import axios from "axios";
import BeritaComp from "../../component/BeritaComp";

function Berita(props) {
  const [berita, setBerita] = useState([]);
  const [jumlah, setJumlah] = useState(11);
  const length = berita.length;

  useEffect(() => {
    async function fetchUrl() {
      const req = await axios.get(props.request.berita);
      setBerita(req.data);
      return req;
    }
    fetchUrl();
  }, [props.request, jumlah]);
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const loadMore = () => {
    return setJumlah(jumlah + 10);
  };
  return (
    <div className="page__berita">
      <Navbar active="berita" />
      <div className="page__berita__body">
        <Slider {...settings}>
          {berita.map((dataBerita, key) =>
            key < 4 ? (
              <Link
                key={key}
                to={`/berita/detail?id=${dataBerita.id}`}
                className="link"
              >
                <BeritaSlide
                  title={dataBerita.judul}
                  img={`http://pallima.bemfmipauntan.org/upload/foto/${dataBerita.cover}`}
                />
              </Link>
            ) : null
          )}
        </Slider>
        {berita.map((dataBerita, key) =>
          key < jumlah ? (
            <Link
              key={key}
              to={`/berita/detail?id=${dataBerita.id}`}
              className="link"
            >
              <BeritaComp
                title={dataBerita.judul}
                img={`http://pallima.bemfmipauntan.org/upload/foto/${dataBerita.cover}`}
                body={dataBerita.konten}
              />
            </Link>
          ) : null
        )}
        <button
          onClick={() => loadMore()}
          className={`${length <= jumlah ? "hidden" : null}`}
        >
          Lihat Lebih Banyak
        </button>
      </div>
    </div>
  );
}

export default Berita;
