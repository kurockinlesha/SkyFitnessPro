import styled from "styled-components";

export const LogoSkypro = styled.div`
  padding-top: 30px;
  padding-bottom: 75px;
`;

export const LogoImg = styled.img`
  width: 220px;
  height: 35px;
`;

export const SelectedCourseTitle = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  padding-bottom: 40px;
  font-variant-numeric: lining-nums proportional-nums;
`;
export const SelectedTrainingTitle = styled.h2`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
`;

export const Video = styled.div`
  padding-top: 40px;
  margin-bottom: 75px;
  width: 1160px;
  height: 639px;
  position: relative;
`;
export const VideoImg = styled.img`
  //   background: url(<path-to-image>),
  //     lightgray -2.007px -48.133px / 100.346% 113.805% no-repeat;
  width: 1160px;
  height: 639px;
`;
export const VideoImgPlay = styled.img`
  fill: #fafafa;
  opacity: 0.75;
  width: 156px;
  height: 156px;
  position: absolute;
  top: 241px;
  right: 502px;
`;

export const Exercises = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 94px;
`;
export const ExercisesDescription = styled.div`
  width: 428px;
`;

export const SelectedTrainingList = styled.ul`
  padding-top: 30px;
  padding-bottom: 40px;
  width: 428px;
  padding-left: 35px;
`;

export const SelectedTrainingListElement = styled.li`
  list-style: disc;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

export const SelectedTrainingButton = styled.button`
  width: 275px;
  height: 52px;
  border-radius: 46px;
  background: var(--Palette-Purple-90, #580ea2);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #fafafa;
  border: none;

  &:hover {
    background: #3f007d;
  }
`;

export const TrainingProgress = styled.div`
  width: 638px;
  border-radius: 30px;
  background: #f2f2f2;
  padding-top: 36px;
`;

export const TrainingProgressInPercentage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 44px;
  padding-right: 55px;
`;

export const TrainingProgressTitle = styled(SelectedTrainingTitle)`
  text-align: center;
  margin-bottom: 40px;
  font-variant-numeric: lining-nums proportional-nums;
`;
export const TrainingProgressElement = styled.p`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  width: 227px;
`;

export const TrainingProgressInput = styled.button`
  width: 278px;
  height: 36px;
  border-radius: 22px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.value === "100%" ? "278px" : props.value)};
    background: #565eef;
    height: 34px;
    border-radius: ${(props) =>
      props.value === "100%" ? "22px" : "22px 0px 0px 22px"};
  }
`;

export const TrainingProgressInputBox = styled.div`
  position: relative;
`;

export const TrainingProgressInputPercentage = styled.p`
  position: absolute;
  top: 1px;
  left: ${(props) =>
    props.value <= 30 && props.value !== 0
      ? "0"
      : props.value > 50 || props.value === 0
      ? "112px"
      : "50px"};
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  z-index: 1;
`;

export const ProgressInputForExerciseFirst = styled(TrainingProgressInput)`
  border: 2px solid #565eef;
  background: #edecff;

  &::before {
    background: #565eef;
  }
`;

export const ProgressInputForExerciseSecond = styled(TrainingProgressInput)`
  border: 2px solid var(--Orange-90, #ff6d00);
  background: var(--Orange-10, #fff2e0);

  &::before {
    background: var(--Orange-90, #ff6d00);
  }
`;

export const ProgressInputForExerciseThird = styled(TrainingProgressInput)`
  border: 2px solid var(--Palette-Purple-80, #9a48f1);
  background: var(--Violet-10, #f9ebff);

  &::before {
    background: var(--Palette-Purple-80, #9a48f1);
  }
`;

export const TrainingProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 26px;
  padding-bottom: 32px;
`;
