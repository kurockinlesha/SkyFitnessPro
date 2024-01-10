import styled from "styled-components";

export const ChoiceWorkoutContainer = styled.div`
  width: 444px;
  height: 626px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  position: absolute;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
`;

export const ChoiceWorkoutHeading = styled.h1`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  text-align: center;
  margin-top: 36px;
`;

export const ChoiceWorkoutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  margin-top: 40px;
  height: 457px;
  width: 307px;
  overflow: auto;
  padding-top: 5px;
`;

export const CustomCheckbox = styled.span`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 27px;
    height: 25px;
    background-image: url("./img/icon/checkbox.svg");
    background-size: contain;
    background-repeat: no-repeat;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.2s ease-in;
    position: absolute;
    left: 250px;
    top: 9px;
  }
`;

export const RealCheckbox = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  z-index: -1;

  &:checked + ${CustomCheckbox}::before {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const ItemText = styled.div`
  width: 278px;
  min-height: 76px;
  border-radius: 26px;
  border: 1px solid #000000;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 11px;
`;

export const ItemTextTitle = styled.div`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.05px;
`;

export const ItemTextDay = styled.div`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.016px;
`;

export const ChoiceWorkoutItem = styled.div`
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  input[type="checkbox"]:checked ~ ${ItemText} {
    border: 1px solid #06b16e;
  }

  input[type="checkbox"]:checked ~ ${ItemText} > ${ItemTextTitle} {
    color: #06b16e;
  }

  input[type="checkbox"]:checked ~ ${ItemText} > ${ItemTextDay} {
    color: #06b16e;
  }
`;
