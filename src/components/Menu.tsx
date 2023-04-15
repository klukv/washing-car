import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "../scss/Menu.scss";
import logo from "../assets/img/menu/logo.svg";
import {
  catalogPage,
  homePage,
  loginPage,
  recordPage,
  stocksPage,
} from "../utils/const";
import { logout } from "../redux/slices/userSlice";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutAcc = async () => {
    await dispatch(logout());
    navigate(loginPage);
    window.location.reload();
  };

  return (
    <nav className="menu">
      <div className="menu__inner">
        <div className="menu__logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="menu__list">
          <li className="menu__list-point">
            <Link to={homePage} className="menu__list-link menu-main">
              Главная
            </Link>
          </li>
          <li className="menu__list-point">
            <Link to={stocksPage} className="menu__list-link menu-stocks">
              Акции
            </Link>
          </li>
          <li className="menu__list-point">
            <Link to={catalogPage} className="menu__list-link menu-about">
              Каталог
            </Link>
          </li>
          <li className="menu__list-point">
            <Link to={recordPage} className="menu__list-link menu-record">
              Запись
            </Link>
          </li>
          <li className="menu__list-point">
            <span className="menu__list-link menu-exit" onClick={logoutAcc}>Выход</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
