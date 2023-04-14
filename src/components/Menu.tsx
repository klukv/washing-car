import React from "react";
import {Link} from "react-router-dom"

import "../scss/Menu.scss"
import logo from "../assets/img/menu/logo.svg"
import { catalogPage, homePage, recordPage, stocksPage } from "../utils/const";

const Menu: React.FC = () => {
  return <nav className="menu">
    <div className="menu__inner">
        <div className="menu__logo"><img src={logo} alt="logo" /></div>
        <ul className="menu__list">
            <li className="menu__list-point"><Link to={homePage} className="menu__list-link menu-main">Главная</Link></li>
            <li className="menu__list-point"><Link to={stocksPage} className="menu__list-link menu-stocks">Акции</Link></li>
            <li className="menu__list-point"><Link to={catalogPage} className="menu__list-link menu-about">Каталог</Link></li>
            <li className="menu__list-point"><Link to={recordPage} className="menu__list-link menu-record">Запись</Link></li>
            <li className="menu__list-point"><Link to={"exit"} className="menu__list-link menu-exit">Выход</Link></li>
        </ul>
    </div>
  </nav>;
};

export default Menu;
