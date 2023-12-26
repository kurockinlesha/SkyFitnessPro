import styled from "styled-components";
export const Wrapper = styled.div`
scroll-behavior: smooth;
  width: auto;
  height: 1448px;
  position: relative;
  background-color: #271a58;
`;
export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #271a58;
`;

export const Main = styled.main`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ButtonScrollMain = styled.button`
position: fixed;
  display: inline-flex;
  padding: 5px 16px 7px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 46px;
  background: #c7e957;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.1px;
  &:hover {
    background: #daf289;
  }

  &:active {
    background: #ebffab;
  }
`;
export const ImgBottun = styled.img`
`;
export const ButtonScroll = styled.div`
display: flex;
justify-content: center;
padding-top: 34px;
`;