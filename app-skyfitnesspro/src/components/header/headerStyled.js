import styled from "styled-components";
export const Head = styled.div`
// padding-left: 140px;
 position: relative;
`;
export const Header = styled.div`
  // padding-right: 140px;
    justify-content: space-between;
    padding-top: 30px
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: transparent;
`;

export const MainLoginButton = styled.button`
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

export const HeagerTop = styled.div`
margin-bottom: 35px;
	display: flex;
	justify-content: space-between;
`;

export const Sticker = styled.div`
position: absolute;
top: 100px;
left: 1004px;
`;
export const TextOneTitle = styled.p`
line-height: 23px;
font-size: 20px;
color: #ffffff;
opacity: 50%;
letter-spacing: -0.05px;

`;
export const TextTwoTitle = styled.p`
line-height: 55px;
    font-weight: 400;
    font-size: 60px;
    color: #f4f4ff;
    letter-spacing: -1.17px;
    margin-top: 17px;
    width: 820px;
    height: 110px;
`;

export const MenuStyle = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	cursor: pointer;
`;

export const SpanName = styled.span`
	color: ${props => props.$color ? 'white' : 'black'};
	font-variant-numeric: lining-nums proportional-nums;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 133.333% */
	text-overflow: ellipsis;
	overflow: hidden;
	min-width: 64px;
	max-width: 160px;
	margin-left: 15px;
	margin-right: 12px;
`;
