import React from "react";
import * as S from "./headerStyled";
import sticker from "../../img/sticker.svg";
import logo from '../../img/logo.svg'
// import { NavLink } from "react-router-dom";
export function Header() {
  function Logout() {
    <use xlinkHref="#" id="click_Logout"></use>;
  }
  return (
    <S.Head>
    <S.Header>
      <S.HeagerTop>
        {/* <NavLink to="/"> */}
          <S.HeaderLogo>
            <img src={logo} alt="logo" />
          </S.HeaderLogo>
        {/* </NavLink> */}
      </S.HeagerTop>
      <S.Sticker className="sticker">
        <img src={sticker} alt="sticker"></img>
      </S.Sticker>
      <S.TopButton>
        <S.MainLoginButton onClick={Logout}>Войти</S.MainLoginButton>
      </S.TopButton>
    </S.Header>
    <S.TextOneTitle>Онлайн-тренировки для занятий дома</S.TextOneTitle>
    <S.TextTwoTitle>Начните заниматься спортом и улучшите качество жизни</S.TextTwoTitle>
    <S.Sticker className="sticker">
    <img src={sticker} alt="sticker"></img>
  </S.Sticker>
  
  </S.Head>

  );
}
