import React from "react";

import * as S from "./LoginPasswordStyle";
const Password = () => {
  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src="./img/logo-SkyFitnessPro.svg" alt="logo" />
            </S.ModalLogo>
            <S.NewLoginPassword>
              <S.NewLoginPasswordText>Новый пароль:</S.NewLoginPasswordText>
            </S.NewLoginPassword>
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.MdalBtnSignupEnt>
              <S.MdalBtnSignupEntLink href="/">
                Сохранить
              </S.MdalBtnSignupEntLink>
            </S.MdalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </S.Wrapper>
  );
};

export { Password };
