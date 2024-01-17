import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import * as S from "./Auth.styles";
import * as Styled from "../../components/progress/progress.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../components/store/slices/userSlice";
import { useState } from "react";

export const Auth = ({ email, password, setEmail, setPassword }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Неверно введён логин или пароль");
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
          <S.EnterButton onClick={(e) => handleLogin(e)}>Войти</S.EnterButton>
          <NavLink to="/reg">
            <S.RegisterButton>Зарегистрироваться</S.RegisterButton>
          </NavLink>
          {errorMessage ? (
            <Styled.ErrorText>{errorMessage}</Styled.ErrorText>
          ) : null}
        </S.LogInForm>
      </S.Container>
    </S.Wrapper>
  );
};
