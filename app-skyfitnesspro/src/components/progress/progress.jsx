import * as S from "./progress.styled";

export const MyProgress = ({
  progressValues,
  isMyProgressOpen,
  closeModalWindow,
  setProgressValues,
  isErrorExist,
  workout,
}) => {
  // console.log("isErrorExist", isErrorExist);
  
  return isMyProgressOpen ? (
    <S.MyProgressDataContainer>
      <S.MyProgressData>
        <S.MyProgressTitle>Мой прогресс</S.MyProgressTitle>
        {workout.exercises.map((exercise, index) => {
          const exerciseText = exercise.name.split("(");
          
          return (
            <S.MyProgressBox key={index}>
              <S.MyProgressText>
                Сколько раз вы сделали {exerciseText[0].toLowerCase()}?
              </S.MyProgressText>
              <S.MyProgressInput
                type="number"
                placeholder="Введите значение"
                value={progressValues[index]}
                onChange={(e) => {
                  const newProgressValues = [...progressValues];
                  newProgressValues[index] = e.target.value;
                  setProgressValues(newProgressValues);
                }}
              ></S.MyProgressInput>
            </S.MyProgressBox>
          );
        })}
        <S.MyProgressButton onClick={closeModalWindow}>
          Отправить
        </S.MyProgressButton>
        {isErrorExist ? (
          <S.ErrorText>Все поля должны быть заполнены!</S.ErrorText>
        ) : null}
      </S.MyProgressData>
    </S.MyProgressDataContainer>
  ) : null;
};
