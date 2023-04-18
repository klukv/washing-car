import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectIsAuth,
  selectRoleUser,
  selectUsername,
} from "../redux/selectors";
import { adminPage, loginPage } from "../utils/const";

import "../scss/Header.scss";

const Header: React.FC = () => {
  const username = useSelector(selectUsername);
  const isAuth = useSelector(selectIsAuth);
  const userRole = useSelector(selectRoleUser);
  const isAdmin = userRole.includes("ROLE_ADMIN");
  return (
    <header className="header">
      {isAuth ? (
        <div className="header__hello">
          {isAdmin && (
            <Link to={adminPage} className="admin__link">
              Все записи
            </Link>
          )}
          <p className="header__hello-text">Добрый день, {username}</p>
        </div>
      ) : (
        <div className="header__login">
          <Link to={loginPage} className="header__login-text">
            Войдите в аккаунт
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
