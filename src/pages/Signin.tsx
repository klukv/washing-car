import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signinRequest } from "../services/user";
import { registrationPage } from "../utils/const";

import "../scss/Auth.scss";
import { createUser, setIsAuth } from "../redux/slices/userSlice";

interface State {
  username: string;
  password: string;
  loading: boolean;
  message: string;
}

const initialValues = {
  username: "",
  password: "",
  loading: false,
  message: "",
};

const Signin: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userAuth, setUserAuth] = React.useState<State>(initialValues);

  const handleLogin = (formValue: { username: string; password: string }) => {
    const { username, password } = formValue;

    setUserAuth((prevState) => {
      return {
        ...prevState,
        message: "",
        loading: true,
      };
    });
    signinRequest(username, password).then(
      (data) => {
        if (data.token) {
          dispatch(
            createUser({
              id: data.id,
              username: data.username,
              numberMobile: data.numberMobile,
              roles: data.roles,
            })
          );
          dispatch(setIsAuth(true));
        }
        navigate("/");
        window.location.reload();
      },
      ({ response }) => {
        const resMessage =
          (response && response.data && response.data.message) ||
          response.message ||
          response.toString();

        setUserAuth((prevState) => {
          return {
            ...prevState,
            loading: false,
            message: resMessage,
          };
        });
      }
    );
  };

  return (
    <div className="main auth">
      <div className="col-md-12">
        <div className="card card-container auth__container">
          <Formik initialValues={initialValues} onSubmit={handleLogin}>
            <Form className="auth__form">
              <h1 className="auth__title">Авторизация</h1>
              <div className="form-group group">
                <Field
                  name="username"
                  type="text"
                  className="form-control auth__values"
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="auth__name">Имя пользователя</label>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group group">
                <Field
                  name="password"
                  type="password"
                  className="form-control auth__values"
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className="auth__name">Пароль</label>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={userAuth.loading}
                >
                  {userAuth.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Войти</span>
                </button>
              </div>
              <div className="auth__link-reg">
                У вас нет аккаунта?
                <Link to={registrationPage}>Зарегистрируйтесь</Link>
              </div>

              {userAuth.message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {userAuth.message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signin;
