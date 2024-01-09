import React from "react";
import * as S from "./course.styled";
import * as Styled from "../workout-video-page/workout-video-page.styled";
import { NavLink } from "react-router-dom";

export function Course() {
  return (
    <>
     <NavLink to="/">
      <Styled.LogoSkypro>
        <Styled.LogoImg src="./img/logoSkypro.png" alt="logo" />
      </Styled.LogoSkypro>
      </NavLink>
      <S.NameCourse>
        <S.MainNameCourse>Йога</S.MainNameCourse>
      </S.NameCourse>
      <S.ReasonCourse>Подойдет для вас, если:</S.ReasonCourse>
      <S.ReasonsCourses>
        <S.Reasons>
          <S.Point>
            <S.PointText>1</S.PointText>
          </S.Point>
          <S.Type>Давно хотели попробовать йогу, но не решались начать.</S.Type>
        </S.Reasons>
        <S.Reasons>
          <S.Point>
            <S.PointText>2</S.PointText>
          </S.Point>
          <S.Type>
            Хотите укрепить позвоночник, избавиться от болей в спине и суставах.
          </S.Type>
        </S.Reasons>
        <S.Reasons>
          <S.Point>
            <S.PointText>3</S.PointText>
          </S.Point>
          <S.Type>Ищете активность, полезную для тела и души.</S.Type>
        </S.Reasons>
      </S.ReasonsCourses>
      <S.DirectionsCourse>Направления:</S.DirectionsCourse>
      <S.DirectionsCourses>
        <S.TypesList>
          <S.TypeElement>Йога для новичков</S.TypeElement>
          <S.TypeElement>Классическая йога</S.TypeElement>
          <S.TypeElement>Йогатерапия</S.TypeElement>
        </S.TypesList>
        <S.TypesList>
          <S.TypeElement>Кундалини-йога</S.TypeElement>
          <S.TypeElement>Хатха-йога</S.TypeElement>
          <S.TypeElement>Аштанга-йога</S.TypeElement>
        </S.TypesList>
      </S.DirectionsCourses>
      <S.Description>
        <S.DescriptionText>
          Благодаря комплексному воздействию упражнений происходит проработка
          всех групп мышц, тренировка суставов, улучшается циркуляция крови.
          Кроме того, упражнения дарят отличное настроение, заряжают бодростью и
          помогают противостоять стрессам.
        </S.DescriptionText>
      </S.Description>
      <S.Application>
        <S.ApplicationText>
          Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
          выбором направления и тренера, с которым тренировки принесут здоровье
          и радость!
        </S.ApplicationText>
        <S.TrainingButton>
          <S.TrainingText>Записаться на тренировку</S.TrainingText>
        </S.TrainingButton>
        <S.ApplicationImg>
          <img src="./img//phone.svg" alt="phone" />
        </S.ApplicationImg>
      </S.Application>
   
    </>
  );
}
