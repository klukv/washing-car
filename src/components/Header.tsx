import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../scss/Header.scss";
import { selectIsAuth, selectUsername } from "../redux/selectors";
import { loginPage } from "../utils/const";

const Header: React.FC = () => {
  const username = useSelector(selectUsername);
  const isAuth = useSelector(selectIsAuth);
  return (
    <header className="header">
      {isAuth ? (
        <div className="header__hello">
          <p className="header__hello-text">Добрый день, {username}</p>
        </div>
      ) : (
        <div className="header__login">
          <Link to={loginPage} className="header__login-text">Войдите в аккаунт</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
