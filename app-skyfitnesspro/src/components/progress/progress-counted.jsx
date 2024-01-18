import * as S from "./progress.styled";

export const CountedProgress = ({ title }) => {
  return (
    <S.MyProgressDataContainer>
      <S.CountedProgressBox>
        <S.CountedProgressTitle>{title}</S.CountedProgressTitle>
        <S.CountedProgressImg src="/img/purpleHand.png" alt="ready" />
      </S.CountedProgressBox>
    </S.MyProgressDataContainer>
  );
};
