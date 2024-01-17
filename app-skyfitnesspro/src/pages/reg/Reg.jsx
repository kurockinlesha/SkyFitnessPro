import React, { useState } from "react";
import * as S from "./Reg.styles";
import * as Styled from "../../components/progress/progress.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../components/store/slices/userSlice";

export const Reg = ({ email, password, setEmail, setPassword }) => {
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleReg = async (e) => {
    e.preventDefault();
    const auth = getAuth();
	

    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
		if (repeatPassword === "" || email === "" || password === "") {
		throw new Error("Все поля должны быть заполнены");
	  } else if (password !== repeatPassword) {
		throw new Error("Пароли не совпадают");
	  }
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.log(error);
      });
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.LogInForm>
          <NavLink to="/">
            <S.Logo src="/img/logo-SkyFitnessPro.svg" alt="logo" />
          </NavLink>
          <S.EmailInput
            type="email"
            id="email"
            placeholder="Логин"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <S.PasswordInput
            type="password"
            id="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.PasswordInputRepeat
            type="password"
            placeholder="Повторите пароль"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <S.RegisterButton onClick={(e) => handleReg(e)}>
            Зарегистрироваться
          </S.RegisterButton>
          {errorMessage ? (
            <Styled.ErrorText>{errorMessage}</Styled.ErrorText>
          ) : null}
        </S.LogInForm>
      </S.Container>
    </S.Wrapper>
  );
};
