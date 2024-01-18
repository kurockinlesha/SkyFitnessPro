import React from "react";

import * as S from "./LoginPasswordStyle";
const Password = ({
  modalActivePassword,
  setModalActivePassword,
  setNewPassword,
  newPassword,
  updateUserPassword,
}) => {
  return (
    <>
      {modalActivePassword && (
        <S.ModalBlock onClick={() => setModalActivePassword(false)}>
          <S.ModalFormLogin onClick={(e) => e.stopPropagation()}>
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
              value={newPassword}
              placeholder="Повторите пароль"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <S.MdalBtnSignupEnt>
              <S.MdalBtnSignupEntLink onClick={(e) => updateUserPassword(e)}>
                Сохранить
              </S.MdalBtnSignupEntLink>
            </S.MdalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      )}
    </>
  );
};

export { Password };
