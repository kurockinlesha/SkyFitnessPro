import * as S from "./progress.styled";

export const MyProgress = ({
  progressValue,
  progressValueSecond,
  progressValueThird,
  isMyProgressOpen,
  closeModalWindow,
  setProgressValue,
  setProgressValueSecond,
  setProgressValueThird,
  isErrorExist,
  
}) => {
  return isMyProgressOpen ? (
    <S.MyProgressData isErrorExist={isErrorExist}>
      <S.MyProgressTitle>Мой прогресс</S.MyProgressTitle>
      <S.MyProgressBox>
        <S.MyProgressText>
          Сколько раз вы сделали наклоны вперед?
        </S.MyProgressText>
        <S.MyProgressInput
          type="number"
          placeholder="Введите значение"
          value={progressValue}
          onChange={(e) => setProgressValue(e.target.value)}
        ></S.MyProgressInput>
      </S.MyProgressBox>
      <S.MyProgressBox>
        <S.MyProgressText>
          Сколько раз вы сделали наклоны назад?
        </S.MyProgressText>
        <S.MyProgressInput
          placeholder="Введите значение"
          value={progressValueSecond}
          onChange={(e) => setProgressValueSecond(e.target.value)}
        ></S.MyProgressInput>
      </S.MyProgressBox>
      <S.MyProgressBox>
        <S.MyProgressText>
          Сколько раз вы сделали поднятие ног, согнутых в коленях?
        </S.MyProgressText>
        <S.MyProgressInput
          placeholder="Введите значение"
          value={progressValueThird}
          onChange={(e) => setProgressValueThird(e.target.value)}
        ></S.MyProgressInput>
      </S.MyProgressBox>
      <S.MyProgressButton onClick={closeModalWindow}>
        Отправить
      </S.MyProgressButton>
      {isErrorExist ? (
        <S.ErrorText>Все поля должны быть заполнены!</S.ErrorText>
      ) : null}
    </S.MyProgressData>
  ) : null;
};
