import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../component/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import banner from "./../../assets/img/bg.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function DetailBerita(props) {
  let query = useQuery();
  const [berita, setBerita] = useState([]);
  const [isberita, setIsBerita] = useState(false);
  useEffect(() => {
    async function fetchUrl() {
      const reqData = await axios.get(props.request.berita);
      setBerita(reqData.data);
      return reqData;
    }
    fetchUrl();
  }, [props.request]);
  const CountBerita = () => {
    useEffect(() => {
      setIsBerita(true);
    });
    return <div></div>;
  };
  return (
    <div className="detail__berita"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(237, 237, 237, 0.4),rgba(237, 237, 237, 0.6)), url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Navbar active="berita" />
      <div className="body__detail__berita">
        {isberita ? null : <h1>Page not found</h1>}
        {berita.map((data, key) =>
          query.get("id") == data.id ? (
            <div key={key}>
              <CountBerita />
              <h1>{data.judul}</h1>
              <span>
                oleh <b>{data.deskripsi}</b> |{" "}
                {new Intl.DateTimeFormat("id", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(data.tgl_publis))}
              </span>
              <br />
              <img
                src={`https://pallima.floodewsptk.my.id/upload/foto/${data.cover}`}
                alt={`foto ${data.title}`}
              />
              <p dangerouslySetInnerHTML={{ __html: data.konten }}></p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default DetailBerita;
