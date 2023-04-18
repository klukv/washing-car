import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Admin, Catalog, Home, Record, Signin, Signup, Stocks } from "./pages";
import { Header, Menu } from "./components";
import { selectIsAuth, selectRoleUser } from "./redux/selectors";
import {
  adminPage,
  catalogPage,
  homePage,
  recordPage,
  registrationPage,
  stocksPage,
} from "./utils/const";

import "./scss/App.scss";

const App: React.FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const userRole = useSelector(selectRoleUser);
  const isAdmin = userRole.includes("ROLE_ADMIN");
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
            {isAdmin && <Route path={adminPage} element={<Admin />} />}
          </>
        ) : (
          <>
            <Route path="*" element={<Signin />} />
            <Route path={registrationPage} element={<Signup />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
