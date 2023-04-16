import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
//---------------------------------------------------------------------
const menuLinks = [
  {
    id: 1,
    nameLink: "Главная",
    classNameLink: "menu__list-link menu-main",
    path: homePage,
  },
  {
    id: 2,
    nameLink: "Акции",
    classNameLink: "menu__list-link menu-stocks",
    path: stocksPage,
  },
  {
    id: 3,
    nameLink: "Каталог",
    classNameLink: "menu__list-link menu-about",
    path: catalogPage,
  },
  {
    id: 4,
    nameLink: "Запись",
    classNameLink: "menu__list-link menu-record",
    path: recordPage,
  },
];


const Menu: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

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
          {menuLinks.map((menuLink) => (
            <li key={menuLink.id.toString()} className="menu__list-point">
              <Link
                key={menuLink.id}
                to={menuLink.path}
                className={
                    location.pathname === menuLink.path
                    ? menuLink.classNameLink.concat(" active")
                    : menuLink.classNameLink
                }
              >
                {menuLink.nameLink}
              </Link>
            </li>
          ))}
          <li className="menu__list-point">
            <span className="menu__list-link menu-exit" onClick={logoutAcc}>
              Выход
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
