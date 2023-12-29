import React from "react";
import * as S from './Auth.styles';
import { NavLink } from 'react-router-dom';

export const Auth = () => {
	return (
		<S.Wrapper>
			<S.LogoHeader>
				<NavLink to='/'>
					<S.Logo src='/logo.png'></S.Logo>
				</NavLink>
			</S.LogoHeader>

			<S.Container>
				<S.LogInForm>
					<S.Logo src='/logo2.png'></S.Logo>
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