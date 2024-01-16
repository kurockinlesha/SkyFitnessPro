import styled from "styled-components";

export const NameCourse = styled.div`
  background-image: url("/img/yoga.svg");
  background-repeat: no-repeat;
  margin-bottom: 75px;
  height: 310px;
`;
export const MainNameCourse = styled.h1`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px; /* 112.5% */
  letter-spacing: -0.8px;
  padding-top: 30px;
  padding-left: 30px;
`;

export const ReasonCourse = styled.h3`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px; /* 120% */
  margin-bottom: 40px;
`;

export const ReasonsCourses = styled.div`
  margin-bottom: 75px;
  display: flex;
  gap: 87px;
`;

export const Reasons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 335px;
`;

export const Point = styled.div`
  display: flex;
  width: 67px;
  height: 67px;
  padding: 10.687px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13.359px;
  border-radius: 1202.287px;
  background: #c7e957;
`;

export const PointText = styled.p`
  display: flex;
  width: 40.076px;
  height: 53.435px;
  flex-direction: column;
  justify-content: center;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

export const Type = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const DirectionsCourse = styled.h3`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px; /* 120% */
  margin-bottom: 40px;
`;

export const DirectionsCourses = styled.div`
  margin-bottom: 75px;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 168px;
`;

export const TypesList = styled.ul`
  margin-left: 30px;
`;
export const TypeElement = styled.li`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  list-style: disc;
`;

export const Description = styled.div`
  margin-bottom: 75px;
`;

export const DescriptionText = styled.p`
  width: 1160px;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const Application = styled.div`
  position: relative;
  width: 1160px;
  height: 300px;
  border-radius: 30px;
  background: #f9ebff;
  margin-bottom: 75px;
  padding-left: 52px;
  padding-top: 46px;
`;

export const ApplicationText = styled.p`
  width: 823px;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
  margin-bottom: 34px;
`;

export const TrainingButton = styled.button`
  width: 275px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 46px;
  background: var(--Palette-Purple-90, #580ea2);

  &:hover {
    background: #3f007d;
  }
`;

export const TrainingText = styled.p`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: -0.05px;
`;

export const ApplicationImg = styled.div`
  width: 350px;
  position: absolute;
  right: -45px;
  top: 0;
  margin-bottom: 95px;
`;
