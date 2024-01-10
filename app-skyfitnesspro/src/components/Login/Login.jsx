import React from "react";

import * as S from "../Password/LoginPasswordStyle"
const Login = () => {
 
  // const S.Wrapper = S.d.div``

  return (
    // <S.Wrapper>
    //   <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLoginWigth>
            <S.ModalLogo>
              <S.ModalLogoImg
                src="./img/logo-SkyFitnessPro.svg"
                alt="logo"
              />
            </S.ModalLogo>
            <S.NewLoginPassword>
              <S.NewLoginPasswordText>
                Новый логин:
              </S.NewLoginPasswordText>
            </S.NewLoginPassword>
            <S.ModalInput type="text" name="login" placeholder="Логин" />

            <S.MdalBtnSignupEnt>
              <S.MdalBtnSignupEntLink href="/">
                Сохранить
              </S.MdalBtnSignupEntLink>
            </S.MdalBtnSignupEnt>
          </S.ModalFormLoginWigth>
        </S.ModalBlock>
    //   </S.ContainerSignup>
    // </S.Wrapper>
  );
};

export { Login };
