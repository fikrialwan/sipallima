import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import Navbar from "../../component/Navbar";
import DataRTRW from "../../component/DataRTRW";
import DataComp from "../../component/DataComp";
import request from "./../../request.js";
import axios from "axios";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Data() {
  const [pengurus, setPengurus] = useState([]);
  const [ibadah, setIbadah] = useState([]);
  const [sekolah, setSekolah] = useState([]);
  const [posyandu, setPosyandu] = useState([]);
  let query = useQuery();
  useEffect(() => {
    async function fetchUrl() {
      switch (query.get("data")) {
        case "RT dan RW":
          const requestPeng = await axios.get(request.pengurus);
          setPengurus(requestPeng.data);
          break;

        case "Tempat Ibadah":
          const requestIbadah = await axios.get(request.ibadah);
          setIbadah(requestIbadah.data);
          break;

        case "Sekolah":
          const requestSekolah = await axios.get(request.sekolah);
          setSekolah(requestSekolah.data);
          break;

        case "Posyandu":
          const requestPosyandu = await axios.get(request.posyandu);
          setPosyandu(requestPosyandu.data);
          break;

        default:
          break;
      }
    }
    fetchUrl();
  }, [request, query]);
  return (
    <div className="data">
      <Navbar active="data" />
      <div className="body__data">
        <h1>{query.get("data")}</h1>
        {query.get("data") === "RT dan RW" ? (
          <table>
            <thead>
              <tr>
                <th>Jabatan</th>
                <th>Nama</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              {pengurus.map((dataPeng, key) => (
                <DataRTRW
                  key={key}
                  nama={dataPeng.nama}
                  jabatan={dataPeng.jabatan}
                  alamat={dataPeng.alamat}
                  data="rtrw"
                />
              ))}
            </tbody>
          </table>
        ) : null}
        {query.get("data") === "Sekolah" ? (
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Alamat</th>
              </tr>
            </thead>
            <tbody>
              {sekolah.map((dataSekolah, key) => (
                <DataComp
                  key={key}
                  nama={dataSekolah.nama}
                  alamat={dataSekolah.alamat}
                  data="Sekolah"
                />
              ))}
            </tbody>
          </table>
        ) : null}
        {query.get("data") === "Posyandu" ? (
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Foto</th>
              </tr>
            </thead>
            <tbody>
              {posyandu.map((dataPosyandu, key) => (
                <DataComp
                  key={key}
                  nama={dataPosyandu.nama}
                  alamat={dataPosyandu.alamat}
                  img={dataPosyandu.foto}
                  data="posyandu"
                />
              ))}
            </tbody>
          </table>
        ) : null}
        {query.get("data") === "Tempat Ibadah" ? (
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Foto</th>
              </tr>
            </thead>
            <tbody>
              {ibadah.map((dataIbadah, key) => (
                <DataComp
                  key={key}
                  nama={dataIbadah.ketua}
                  alamat={dataIbadah.alamat}
                  img={dataIbadah.foto}
                />
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
}

export default Data;
