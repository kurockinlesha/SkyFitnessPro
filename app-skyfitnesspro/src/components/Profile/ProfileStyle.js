import { styled } from "styled-components";

export const ContainerProfile = styled.div``;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
export const HeaderLogo = styled.div``;
export const Img = styled.img``;
export const HeaderProfile = styled.div`
  display: flex;
  column-gap: 9px;
`;
export const HeaderSvg = styled.svg`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;
export const HeaderSelect = styled.select`
  background-color: #fafafa;
  color: #000;
  text-align: right;
  border: 0px;
  outline: 0px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
`;
export const Profile = styled.div``;
export const Heading = styled.div``;
export const ProfileHeading = styled.h1`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 56px;
  margin-top: 75px;
`;
export const ProfileText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 40px;
`;
export const ProfileButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  margin-top: 40px;
`;
export const Button = styled.button`
  width: 275px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 46px;
  background: var(--Palette-Purple-90, #580ea2);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;

  &:hover {
    background: #3f007d;
  }
`;
export const Course = styled.div`
  margin-top: 75px;
`;
export const CourseBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 40px;
  margin-top: 60px;
`;
export const CourseItem = styled.div`
  width: 360px;
  height: 480px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const CourseItem1 = styled(CourseItem)`
  background-image: url("./img/icon-class-yoga.png");
`;
export const CourseItem2 = styled(CourseItem)`
  background-image: url("./img/icon-class-Stretching.png");
`;
export const CourseItem3 = styled(CourseItem)`
  background-image: url("./img/icon-class-Bodyflex.png");
  width: 330px;
  height: 435px;
  margin-top: 24px;
  box-shadow: -10px 10px 15.999px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 29.998px;
`;
export const ButtonLink = styled.button`
  width: 136px;
  height: 43px;
  position: absolute;
  left: 40px;
  bottom: 47px;
  border-radius: 80px;
  background: #c7e957;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: StratosSkyeng;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
  letter-spacing: -0.05px;
  border: none;
`;
export const ButtonLink3 = styled(ButtonLink)`
  bottom: 22px;
`;
