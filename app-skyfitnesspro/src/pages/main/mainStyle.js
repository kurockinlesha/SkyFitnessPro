import styled from "styled-components";

// export const Wrapper = styled.body`
//   scroll-behavior: smooth;
//   width: auto;
//   background-color: #271a58;
// `;
// export const Container = styled.div`

//   height: 100vh;
//   margin: 0 auto;
// `;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const ButtonScrollMain = styled.button`
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

export const ButtonScroll = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  padding-top: 34px;
`;
