import { NavLink } from "react-router-dom";
import * as S from "./workout-video-page.styled";

export const WorkoutVideoPage = ({
  progressValue,
  openModalWindow,
  progressValueSecond,
  progressValueThird,
}) => {
  let valueInPercentage = Math.round((progressValue / 10) * 100);
  let valueInPercentageSecond = Math.round((progressValueSecond / 10) * 100);
  let valueInPercentageThird = Math.round((progressValueThird / 5) * 100);

  if (valueInPercentage > 100) {
    valueInPercentage = 100;
  } else if (valueInPercentageSecond > 100) {
    valueInPercentageSecond = 100;
  } else if (valueInPercentageThird > 100) {
    valueInPercentageThird = 100;
  }

  return (
    <>
      <NavLink to="/">
        <S.LogoSkypro>
          <S.LogoImg src="./img/logoSkypro.png" alt="logo" />
        </S.LogoSkypro>
      </NavLink>
      <S.SelectedCourseTitle>Йога</S.SelectedCourseTitle>
      <S.SelectedTrainingTitle>
        Красота и здоровье / Йога на каждый день / 2 день
      </S.SelectedTrainingTitle>
      <S.Video>
        <S.VideoImg src="./img/yoga.jpg" alt="yoga" />
        <S.VideoImgPlay src="./img/play.png" alt="play" />
      </S.Video>
      <S.Exercises>
        <S.ExercisesDescription>
          <S.SelectedTrainingTitle>Упражнения</S.SelectedTrainingTitle>
          <S.SelectedTrainingList>
            <S.SelectedTrainingListElement>
              Наклон вперед (10 повторений)
            </S.SelectedTrainingListElement>
            <S.SelectedTrainingListElement>
              Наклон назад (10 повторений)
            </S.SelectedTrainingListElement>
            <S.SelectedTrainingListElement>
              Поднятие ног, согнутых в коленях (5 повторений)
            </S.SelectedTrainingListElement>
          </S.SelectedTrainingList>
          <S.SelectedTrainingButton onClick={openModalWindow}>
            Заполнить свой прогресс
          </S.SelectedTrainingButton>
        </S.ExercisesDescription>
        <S.TrainingProgress>
          <S.TrainingProgressTitle>
            Мой прогресс по тренировке 2:
          </S.TrainingProgressTitle>
          <S.TrainingProgressBox>
            <S.TrainingProgressInPercentage>
              <S.TrainingProgressElement>
                Наклоны вперед
              </S.TrainingProgressElement>
              <S.TrainingProgressInputBox>
                <S.ProgressInputForExerciseFirst
                  value={valueInPercentage + "%"}
                ></S.ProgressInputForExerciseFirst>
                <S.TrainingProgressInputPercentage
                  value={parseInt(valueInPercentage)}
                >
                  {valueInPercentage + "%"}
                </S.TrainingProgressInputPercentage>
              </S.TrainingProgressInputBox>
            </S.TrainingProgressInPercentage>

            <S.TrainingProgressInPercentage>
              <S.TrainingProgressElement>
                Наклоны назад
              </S.TrainingProgressElement>
              <S.TrainingProgressInputBox>
                <S.ProgressInputForExerciseSecond
                  value={valueInPercentageSecond + "%"}
                  // onChange={handleChangeValue  }
                ></S.ProgressInputForExerciseSecond>
                <S.TrainingProgressInputPercentage
                  value={parseInt(valueInPercentageSecond)}
                >
                  {valueInPercentageSecond + "%"}
                </S.TrainingProgressInputPercentage>
              </S.TrainingProgressInputBox>
            </S.TrainingProgressInPercentage>

            <S.TrainingProgressInPercentage>
              <S.TrainingProgressElement>
                Поднятие ног, согнутых в коленях
              </S.TrainingProgressElement>
              <S.TrainingProgressInputBox>
                <S.ProgressInputForExerciseThird
                  value={valueInPercentageThird + "%"}
                  // onChange={handleChangeValue}
                ></S.ProgressInputForExerciseThird>
                <S.TrainingProgressInputPercentage
                  value={parseInt(valueInPercentageThird)}
                >
                  {valueInPercentageThird + "%"}
                </S.TrainingProgressInputPercentage>
              </S.TrainingProgressInputBox>
            </S.TrainingProgressInPercentage>
          </S.TrainingProgressBox>
        </S.TrainingProgress>
      </S.Exercises>
    </>
  );
};

// <select className="heder-select" name="select">
//             <option value={"value1"}>Сергей</option>
//             <option value={"value2"}>Алексей</option>
//             <option value={"value3"}>Айрат</option>
//           </select>
