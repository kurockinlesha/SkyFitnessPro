import React from "react";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src="/img/logo-SkyFitnessPro.svg" alt="logo" />
        </div>
        <div className="header-profile">
          <svg className="header-svg">
            <use xlinkHref="img/icon/sprite.svg#icon-tect-logo"></use>
          </svg>
          <select className="heder-select" name="select">
            <option value={"value1"}>Сергей</option>
            <option value={"value2"}>Алексей</option>
            <option value={"value3"}>Айрат</option>
          </select>
        </div>
      </div>
      <div className="profile">
        <div className="heading">
          <h1>Мой профиль</h1>
          <p>Логин: sergey.petrov96</p>
          <p>Пароль: 4fkhdj880d</p>
        </div>
        <div className="profile-button">
          <button className="button">Редактировать логин</button>
          <button className="button">Редактировать пароль</button>
        </div>
      </div>
      <div className="course">
        <h1>Мои курсы</h1>
        <div className="course-box">
          <div className="course-item">
            <div className="course-text">Йога</div>
          </div>
          <div className="course-item">
            <div className="course-text">Стретчинг</div>
          </div>
          <div className="course-item">
            <div className="course-text">Бодифлекс</div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Profile };
