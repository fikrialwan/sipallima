import React, { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../../component/Navbar";
import SlideLayanan from "../../component/SlideLayanan";
import ContentLayanan from "../../component/ContentLayanan";
import { useLocation } from "react-router-dom";
import axios from "axios";
import banner from "./../../assets/img/bg.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Layanan(props) {
  const [datas, setDatas] = useState([]);
  const [tipe, setTipe] = useState();
  let query = useQuery();
  useEffect(() => {
    async function fetchUrl() {
      // const requestDummy = await axios.get(props.request.dummy);
      // console.log(requestDummy);
      const requestLayanan = await axios.get(props.request.layanan);
      setDatas(requestLayanan.data);

      return requestLayanan;
    }
    fetchUrl();
    const GetTipe = () => {
      datas.map((d, key) => (key == 0 ? setTipe(d.id) : null));
    };
    query.get("tipe") ? setTipe(query.get("tipe")) : GetTipe();
  }, [query, props.request]);
  return (
    <div className="layanan">
      <Navbar active="layanan" />
      <div className="body__layanan"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(237, 237, 237, 0.4),rgba(237, 237, 237, 0.6)), url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      >
        <SlideLayanan datas={datas} />
        <div className="layanan__content">
          {datas.map((data, key) =>
            data.id == tipe ? <ContentLayanan content={data} key={key} /> : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Layanan;
