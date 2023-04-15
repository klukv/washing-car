import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Catalog, Home, Record, Signin, Signup, Stocks } from "./pages";
import {
  catalogPage,
  homePage,
  loginPage,
  recordPage,
  registrationPage,
  stocksPage,
} from "./utils/const";

import "./scss/App.scss";
import { Header, Menu } from "./components";
import { selectIsAuth } from "./redux/selectors";

const App: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Routes>
        {isAuth ? (
          <>
            <Route path={homePage} element={<Home />} />
            <Route path={recordPage} element={<Record />} />
            <Route path={catalogPage} element={<Catalog />} />
            <Route path={stocksPage} element={<Stocks />} />
          </>
        ) : (
          <>
            <Route path={loginPage} element={<Signin />} />
            <Route path={registrationPage} element={<Signup />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
