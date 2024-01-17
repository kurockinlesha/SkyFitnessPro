import React, { useEffect, useState } from 'react';
import * as S from "./headerStyled";
import sticker from "../../img/sticker.svg";
import logo from '../../img/logo.svg'
import { NavLink } from "react-router-dom";
import { MenuProfile } from '../../components/menuProf/MenuProfile';

export const Header = ({ userData, setUserData }) => {

  const [color, setColor] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    setColor(true);
  }, []);
  
  function mouseOut() {
    if (isOpen) {
      toggleOpen();
    }
  }

  return (
    <S.Head>
    <S.Header>
      <S.HeagerTop>
        <NavLink to="/">
          <S.HeaderLogo>
            <img src={logo} alt="logo" />
          </S.HeaderLogo>
        </NavLink>
        {userData ? (
						<S.MenuStyle onMouseLeave={mouseOut} onClick={toggleOpen}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='50'
								height='50'
								viewBox='0 0 50 50'
								fill='none'
							>
								<circle
									cx='25'
									cy='25'
									r='25'
									fill={color ? 'rgb(105, 105, 105)' : '#D9D9D9'}
								/>
							</svg>
							<S.SpanName $color={color}>
								{userData && userData.email}
							</S.SpanName>
							<MenuProfile
								setUserData={setUserData}
								color={color}
								isOpen={isOpen}
							/>
						</S.MenuStyle>
					) : (
            <NavLink to='/auth'>
              <S.MainLoginButton>Войти</S.MainLoginButton>
              </NavLink>
                  )}
      </S.HeagerTop>
    </S.Header>
    <S.TextOneTitle>Онлайн-тренировки для занятий дома</S.TextOneTitle>
    <S.TextTwoTitle>Начните заниматься спортом и улучшите качество жизни</S.TextTwoTitle>
    <S.Sticker >
    <img src={sticker} alt="sticker"></img>
  </S.Sticker>
  
  </S.Head>
	);
};

