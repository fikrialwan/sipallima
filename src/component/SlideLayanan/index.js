import React, { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SlideLayanan(props) {
  return (
    <Fragment>
      <div className="slide__layanan">
        <h1 className="title__layanan">Pilih Layanan</h1>
        <ul>
          {props.datas.map((data, key) => (
            <Link
              key={key}
              className="slide__text"
              to={`/layanan?tipe=${data.id}`}
            >
              <li>{data.nama}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="slide__layanan__mobile">
        <ul>
          {props.datas.map((data, key) => (
            <Link
              key={key}
              className="slide__text"
              to={`/layanan?tipe=${data.id}`}
            >
              <li>{data.nama}</li>
              {/* {console.log(data.nama)} */}
            </Link>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default SlideLayanan;
