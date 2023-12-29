import styled from 'styled-components';

export const Wrapper = styled.div`
	padding-top: 24px;
	padding-left: calc(50% - 577px);
	padding-right: calc(50% - 577px);
	min-height: 100vh;
	width: 100%;
	position: relative;
`;

export const Header = styled.header``;

export const LogoHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.img``;

export const AuthButton = styled.button`
	width: 77px;
	height: 36px;
	border: #140d40;
	border-radius: 46px;
	background: #140d40;
	color: #ffffff;
	font-size: 16px;
	font-weight: 400;
	text-align: center;
	&:hover {
		background: rgba(45, 31, 121, 1);
	}
	&:focus {
		background: rgba(59, 41, 161, 1);
	}
`;

