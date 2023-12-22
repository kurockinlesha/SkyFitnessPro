import React from "react";
import * as S from './headerStyled';
export function Header() {
    function Logout (){
        <use xlinkHref="#" id="click_Logout"></use>
    }
    return(
        <S.Header>
            <S.HeagerTop>
            <S.HeaderLogo>
            <S.HeaderLogoImage 
            src="/public/img/logo.svg"
            alt="logo" />
          </S.HeaderLogo>
          </S.HeagerTop>
          <S.TopButton>
          <S.MainLoginButton onClick={Logout}>
            Войти
          </S.MainLoginButton>
          </S.TopButton>
        </S.Header> 
         
    )
}