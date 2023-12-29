import React from "react";
import "../Password/PasswordStyle.css";
const Login = () => {
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <form className="modal__form-login modal__form-login-width">
            <a href="../">
              <div className="modal__logo">
                <img src="./img/logo-SkyFitnessPro.svg" alt="logo" />
              </div>
            </a>
            <div className="new__login-password">
              <p className="new__login-password-text">Новый логин:</p>
            </div>
            <input
              className="modal__input password-first"
              type="password"
              name=""
              placeholder="Логин"
            />

            <button className="modal__btn-signup-ent">
              <a href="/">Сохранить</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
