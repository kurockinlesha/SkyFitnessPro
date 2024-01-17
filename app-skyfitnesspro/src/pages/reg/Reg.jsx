import React, { useState } from 'react';
import * as S from './Reg.styles';
import { useNavigate } from 'react-router-dom'
import { regUser } from '../../components/firebase/firebase'
import { useDispatch } from 'react-redux'
import { registration } from '../../components/store/actions/creators'

export const Reg = () => {
	
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [error, setError] = useState(null);

	const handleRegistration = async (event) => {
		event.preventDefault();
		if (password !== repeatPassword) {
		  alert('Пароли не совпадают');
		  return;
		}
	  
		try {
		  const userData = await regUser(email, password);
		  dispatch(registration(userData));
		  navigate('/auth')
		} catch(error) {
			if (error.message === "Firebase: Error (auth/invalid-email).") {
				setError("Неверный email")
			}
			if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
				setError("Пароль должен иметь минимум 6 символов")
			}
		}
	  };

	return (
		<S.Wrapper>
			<S.Container>
				<S.LogInForm>
					<S.Logo src="/img/logo-SkyFitnessPro.svg" alt="logo" />
					<S.EmailInput type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

					<S.PasswordInput type='password' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)}/>
					<S.PasswordInputRepeat
						type='password'
						placeholder='Повторите пароль'
						value={repeatPassword} 
            			onChange={(e) => setRepeatPassword(e.target.value)}
					/>
					{error && <S.Error>{error}</S.Error>}
					<S.RegisterButton onClick={(event) => handleRegistration(event)}>Зарегистрироваться</S.RegisterButton>
				</S.LogInForm>
			</S.Container>
		</S.Wrapper>
	);
};
