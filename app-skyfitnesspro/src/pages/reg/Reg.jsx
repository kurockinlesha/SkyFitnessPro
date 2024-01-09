import React from 'react';
import * as S from './Reg.styles';
import { NavLink } from 'react-router-dom';

export const Reg = () => {
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
					<S.PasswordInputRepeat
						type='password'
						placeholder='Повторите пароль'
					/>
					<S.RegisterButton>Зарегистрироваться</S.RegisterButton>
				</S.LogInForm>
			</S.Container>
		</S.Wrapper>
	);
};
