import React from "react";
import * as S from './Auth.styles';
import { NavLink } from 'react-router-dom';

export const Auth = () => {
	return (
		<S.Wrapper>
			<S.LogoHeader>
				<NavLink to='/'>
					<S.Logo src="/img/logo-SkyFitnessPro.svg" alt="logo" />
				</NavLink>
			</S.LogoHeader>

			<S.Container>
				<S.LogInForm>
					<S.Logo src="/img/logo-SkyFitnessPro.svg" alt="logo" />
					<S.EmailInput type='email' placeholder='Логин' />

					<S.PasswordInput type='password' placeholder='Пароль' />
					<S.EnterButton>Войти</S.EnterButton>
					<NavLink to='/reg'>
						<S.RegisterButton>Зарегистрироваться</S.RegisterButton>
					</NavLink>
				</S.LogInForm>
			</S.Container>
		</S.Wrapper>
	);
}