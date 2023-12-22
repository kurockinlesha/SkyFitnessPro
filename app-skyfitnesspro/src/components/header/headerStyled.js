import styled from 'styled-components'
export const Header = styled.div`
display: flex;

`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const HeaderLogoImage = styled.img`
  width: 140px;
  height: 21px;
`;
export const MainLoginButton = styled.button`
display: inline-flex;
padding: 5px 16px 7px 16px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 46px;
background: #140D40;
color: #FFF;
text-align: center;
font-variant-numeric: lining-nums proportional-nums;
font-family: StratosSkyeng;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; 
width: 195px;
&:hover {
    background: #2D1F79;
  }

  &:active {
    background: #3B29A1;
  }
`;
export const TopButton = styled.div`
display:flex
`;
export const HeagerTop = styled.div`
`;

