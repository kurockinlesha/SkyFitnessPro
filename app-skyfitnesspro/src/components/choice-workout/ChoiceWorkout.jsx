import React from "react";
import "./choiceWorkoutStyle.css";
import * as S from "./ChoiceWorkout.styled";

const ChoiceWorkout = () => {
  return (
    <S.ChoiceWorkoutContainer>
      <S.ChoiceWorkoutHeading>Выберите тренировку</S.ChoiceWorkoutHeading>
      <S.ChoiceWorkoutBox>
        <S.ChoiceWorkoutItem>
          <label htmlFor="check">
            <S.RealCheckbox
              type="checkbox"
              name="choice-workout"
              id="check"
            />
            <S.CustomCheckbox></S.CustomCheckbox>
            <S.ItemText>
              <S.ItemTextTitle>Утренняя практика</S.ItemTextTitle>
              <S.ItemTextDay>Йога на каждый день / 1 день</S.ItemTextDay>
            </S.ItemText>
          </label>
        </S.ChoiceWorkoutItem>
        <S.ChoiceWorkoutItem>
          <label htmlFor="check-1">
            <S.RealCheckbox
              type="checkbox"
              name="choice-workout"
              id="check-1"
            />
            <S.CustomCheckbox></S.CustomCheckbox>
            <S.ItemText>
              <S.ItemTextTitle>Красота и здоровье</S.ItemTextTitle>
              <S.ItemTextDay>Йога на каждый день / 2 день</S.ItemTextDay>
            </S.ItemText>
          </label>
        </S.ChoiceWorkoutItem>
        <S.ChoiceWorkoutItem>
          <label htmlFor="check-2">
            <S.RealCheckbox
              type="checkbox"
              name="choice-workout"
              id="check-2"
            />
            <S.CustomCheckbox></S.CustomCheckbox>
            <S.ItemText>
              <S.ItemTextTitle>Асаны стоя</S.ItemTextTitle>
              <S.ItemTextDay>Йога на каждый день / 3 день</S.ItemTextDay>
            </S.ItemText>
          </label>
        </S.ChoiceWorkoutItem>
        <S.ChoiceWorkoutItem>
          <label htmlFor="check-3">
            <S.RealCheckbox
              type="checkbox"
              name="choice-workout"
              id="check-3"
            />
            <S.CustomCheckbox></S.CustomCheckbox>
            <S.ItemText>
              <S.ItemTextTitle>
                Растягиваем <br/> мышцы бедра
              </S.ItemTextTitle>
              <S.ItemTextDay>Йога на каждый день / 4 день</S.ItemTextDay>
            </S.ItemText>
          </label>
        </S.ChoiceWorkoutItem>
        <S.ChoiceWorkoutItem>
          <label htmlFor="check-4">
            <S.RealCheckbox
              type="checkbox"
              name="choice-workout"
              id="check-4"
            />
           <S.CustomCheckbox></S.CustomCheckbox>
            <S.ItemText>
              <S.ItemTextTitle>Гибкость спины</S.ItemTextTitle>
              <S.ItemTextDay>Йога на каждый день / 5 день</S.ItemTextDay>
            </S.ItemText>
          </label>
        </S.ChoiceWorkoutItem>
        <S.ChoiceWorkoutItem>
          <label htmlFor="check-5">
            <S.RealCheckbox
              type="checkbox"
              name="choice-workout"
              id="check-5"
            />
           <S.CustomCheckbox></S.CustomCheckbox>
            <S.ItemText>
              <S.ItemTextTitle>Гибкость спины</S.ItemTextTitle>
              <S.ItemTextDay>Йога на каждый день / 5 день</S.ItemTextDay>
            </S.ItemText>
          </label>
        </S.ChoiceWorkoutItem>
     
      </S.ChoiceWorkoutBox>
    </S.ChoiceWorkoutContainer>
   
  );
};

export { ChoiceWorkout };
