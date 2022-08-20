import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Footer from "./component/Footer";
import "./App.css";
import Layanan from "./pages/Layanan";
import Berita from "./pages/Berita";
import Data from "./pages/Data";
import request from "./request.js";
// import Layanan from "./pages/Layanan";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Profil from "./pages/Profil";
import DetailBerita from "./pages/DetailBerita";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>
          <Route path="/profil">
            <Profil request={request} />
          </Route>
          <Route path="/layanan">
            <Layanan request={request} />
            {/* <UnderCons active="layanan" /> */}
          </Route>
          <Route path="/data">
            <Data />
            {/* <UnderCons active="data" /> */}
          </Route>
          <Route path="/berita" exact>
            <Berita request={request} />
          </Route>
          <Route path="/berita/detail">
            <DetailBerita request={request} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
