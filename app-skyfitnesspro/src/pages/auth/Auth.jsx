import React, { useState, useEffect } from "react";
import * as S from './Auth.styles';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { signIn } from '../../components/store/actions/creators'
import { enter } from '../../components/firebase/firebase'
import { useNavigate } from 'react-router-dom'

export const Auth = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);

	const handleEnter = async (event) => {
		event.preventDefault();
		try {
		  const userData = await enter(email, password);
		  dispatch(signIn(userData));
		  navigate('/profile')
		} catch(error) {
			if (error.message === "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).") {
				setError("Акаунт временно заблокирован. Превышено количество неудачных попыток входа")
			}
			if (error.message === "Firebase: Error (auth/invalid-email).") {
				setError("Неверный email")
			}
			if (error.message === "Firebase: Error (auth/invalid-login-credentials).") {
				setError("Неверный пароль")
			}
			console.log(error.message);
		}
	  };

	useEffect(() =>{
		setError(null)
	},[password, email])

	return (
		<S.Wrapper>
			<S.Container>
				<S.LogInForm>
					<S.Logo src="/img/logo-SkyFitnessPro.svg" alt="logo" />
					<S.EmailInput type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

					<S.PasswordInput type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)}/>
					{error && <S.Error>{error}</S.Error>}
					<S.EnterButton onClick={(event) => handleEnter(event)}>Войти</S.EnterButton>
					<NavLink to='/reg'>
						<S.RegisterButton>Зарегистрироваться</S.RegisterButton>
					</NavLink>
				</S.LogInForm>
			</S.Container>
		</S.Wrapper>
	);
}