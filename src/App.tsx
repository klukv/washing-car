import React from "react";
import { Routes, Route } from "react-router-dom";
import { Catalog, Home, Record, Stocks } from "./pages";
import { catalogPage, homePage, recordPage, stocksPage } from "./utils/const";

import "./scss/App.scss";
import { Header, Menu } from "./components";

const App:React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Routes>
        <Route path={homePage} element={<Home />} />
        <Route path={recordPage} element={<Record />} />
        <Route path={catalogPage} element={<Catalog />} />
        <Route path={stocksPage} element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;
