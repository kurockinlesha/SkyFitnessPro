import * as S from "./progress.styled";

export const CountedProgress = ({ isMyProgressCounted }) => {
  return isMyProgressCounted ? (
    <S.CountedProgressBox>
      <S.CountedProgressTitle>Ваш прогресс засчитан!</S.CountedProgressTitle>
      <S.CountedProgressImg src="./img/purpleHand.png" alt="ready" />
    </S.CountedProgressBox>
  ) : null;
};
