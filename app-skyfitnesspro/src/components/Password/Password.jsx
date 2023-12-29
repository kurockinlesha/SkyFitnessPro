import "./PasswordStyle.css";
const Password = () => {
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <form className="modal__form-login">
            <a href="/">
              <div className="modal__logo">
                <img src="./img/logo-SkyFitnessPro.svg" alt="logo" />
              </div>
            </a>
            <div className="new-password">
              <p className="new-password-text">Новый пароль:</p>
            </div>
            <input
              className="modal__input password-first"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className="modal__input password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
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

export { Password };
