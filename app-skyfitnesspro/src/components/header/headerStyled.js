import styled from "styled-components";
export const Head = styled.div`
// padding-left: 140px;
 position: relative;
`;
export const Header = styled.div`
  display: flex;
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

export const HeaderLogoImage = styled.img`
  width: 140px;
  height: 21px;
`;
export const MainLoginButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
line-height: 24px;
font-weight: 400;
font-size: 16px;
color: #ffffff;
background-color: #140d40;
border-radius: 46px;
width: 77px;
height: 36px;
  &:hover {
    background: #2d1f79;
  }

  &:active {
    background: #3b29a1;
  }
`;
export const TopButton = styled.div`
  display: flex;
`;
export const HeagerTop = styled.div`
margin-bottom: 35px;
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
