import styled from "styled-components";

export const MyProgressDataContainer = styled.div`
opacity: 2;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.4);
height: 100vh;
width: 100vw;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`

export const MyProgressData = styled.div`
  width: 444px;
  min-height: ${(props) => (props.isErrorExist ? "600px" : "554px")};
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  box-shadow: -10px 10px 15.999px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const MyProgressTitle = styled.h2`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin-top: 36px;
  text-align: center;
`;

export const MyProgressBox = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  width: 361px;
`;

export const MyProgressText = styled.p`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
`;

export const MyProgressInput = styled.input`
  width: 100%;
  height: 32px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  

  &::placeholder {
    color: #d0cece;
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.05px;
  }
`;

export const MyProgressButton = styled.button`
  border-radius: 46px;
  background: var(--Palette-Purple-90, #580ea2);
  width: 278px;
  height: 52px;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  padding-top: 12px;
  padding-bottom: 16px;
  margin-top: 10px;
  margin-bottom: 44px;

  &:hover {
    background: #3f007d;
  }
`;

export const CountedProgressBox = styled.div`
  position: fixed;
 
  width: 444px;
  height: 360px;
  border-radius: 12px;
  background: #fff;
  margin-top: 41px;
  margin-bottom: 41px;
  display: flex;
  justify-content: center;
  box-shadow: -10px 10px 15.999px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
`;

export const CountedProgressTitle = styled.h1`
  width: 268px;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  padding-top: 41px;
`;

export const CountedProgressImg = styled.img`
  width: 194px;
  height: 212px;
  position: absolute;
  bottom: 0;
  left: 114px;
`;

export const ErrorText = styled.p`
  color: red;
  margin-bottom: 40px;
  font-size: 25px;
  text-align: center;
`;
