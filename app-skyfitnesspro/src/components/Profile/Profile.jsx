// import React, { useState } from "react";
import * as S from "./ProfileStyle";
import { NavLink } from "react-router-dom";
import { Login } from "../Login/Login";
import { Password } from "../Password/Password";
import { useState } from "react";
const Profile = () => {
  // Состояние для модальных окон страницы профиля
  const [modalActiveLogin, setModalActiveLogin] = useState(false);
  const [modalActivePassword, setModalActivePassword] = useState(false);

  return (
    <S.ContainerProfile>
      <S.Header>
        <S.HeaderLogo>
          <NavLink to="/">
            <S.Img src="/img/logo-SkyFitnessPro.svg" alt="logo" />
          </NavLink>
        </S.HeaderLogo>
        <S.HeaderProfile>
          <S.HeaderSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-tect-logo"></use>
          </S.HeaderSvg>
          <S.HeaderSelect name="select">
            <option value={"value1"}>Сергей</option>
            <option value={"value2"}>Алексей</option>
            <option value={"value3"}>Айрат</option>
          </S.HeaderSelect>
        </S.HeaderProfile>
      </S.Header>
      <S.Profile>
        <S.Heading>
          <S.ProfileHeading>Мой профиль</S.ProfileHeading>
          <S.ProfileText>Логин: sergey.petrov96</S.ProfileText>
          <Login
            modalActiveLogin={modalActiveLogin}
            setModalActiveLogin={setModalActiveLogin}
          />
          <S.ProfileText>Пароль: 4fkhdj880d</S.ProfileText>
          <Password
            modalActivePassword={modalActivePassword}
            setModalActivePassword={setModalActivePassword}
          />
        </S.Heading>
        <S.ProfileButton>
          <S.Button onClick={() => setModalActiveLogin(true)}>
            Редактировать логин
          </S.Button>
          <S.Button onClick={() => setModalActivePassword(true)}>
            Редактировать пароль
          </S.Button>
        </S.ProfileButton>
      </S.Profile>
      <S.Course>
        <S.ProfileHeading>Мои курсы</S.ProfileHeading>
        <S.CourseBox>
          <S.CourseItem1>
            <NavLink to="/Course">
              <S.ButtonLink>Перейти</S.ButtonLink>
            </NavLink>
          </S.CourseItem1>
          <S.CourseItem2>
            <NavLink to="/Course">
              <S.ButtonLink>Перейти</S.ButtonLink>
            </NavLink>
          </S.CourseItem2>
          <S.CourseItem3>
            <NavLink to="/Course">
              <S.ButtonLink3>Перейти</S.ButtonLink3>
            </NavLink>
          </S.CourseItem3>
        </S.CourseBox>
      </S.Course>
    </S.ContainerProfile>
  );
};

export { Profile };
