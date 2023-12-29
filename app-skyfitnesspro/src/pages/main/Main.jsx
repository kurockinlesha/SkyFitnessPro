import React from 'react';
import * as S from './Main.styles';
import { NavLink } from 'react-router-dom';

export const Main = () => {

	return (
		<S.Wrapper>
			<S.Header>
				<S.LogoHeader>
					<S.Logo src='/logo.png'></S.Logo>
					<NavLink to='/auth'>
						<S.AuthButton>Войти</S.AuthButton>
					</NavLink>
				</S.LogoHeader>
			</S.Header>
		</S.Wrapper>
	);
};
