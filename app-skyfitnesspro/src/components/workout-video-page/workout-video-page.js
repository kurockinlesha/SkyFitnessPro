import { NavLink } from "react-router-dom";
import * as S from "./workout-video-page.styled";
import * as Style from "../Profile/ProfileStyle";
import { PersonalData } from "../Profile/Profile";

export const WorkoutVideoPage = ({
  progressValues,
  openModalWindow,
  workoutsFirebase,
  workout,
}) => {



  const workoutName = workout?.name ? workout?.name.split("/") : "";
  const workoutCourseName = workoutName[0];
  workoutName && workoutName.shift();
  const workoutCourseText = workoutName && workoutName.join("/");

  return (
    <>
      <Style.Header>
        <Style.HeaderLogo>
          <NavLink to="/">
            <Style.Img src="/img/logo-SkyFitnessPro.svg" alt="logo" />
          </NavLink>
        </Style.HeaderLogo>
       <PersonalData />
      </Style.Header>
      <S.SelectedCourseTitle>{workoutCourseName}</S.SelectedCourseTitle>
      <S.SelectedTrainingTitle>{workoutCourseText}</S.SelectedTrainingTitle>
      <S.Video>
        {workoutsFirebase.length > 0 ? (
          <iframe
            title="trainingVideo"
            frameborder="0"
            width="100%"
            height="639px"
            src={workout && workout.video}
          ></iframe>
        ) : (
          <S.SelectedTrainingTitle>Идет загрузка...</S.SelectedTrainingTitle>
        )}
      </S.Video>
      <S.Exercises>
        <S.ExercisesDescription>
          <S.SelectedTrainingTitle>Упражнения</S.SelectedTrainingTitle>
          <S.SelectedTrainingList>
            {workout &&
              workout.exercises.map((exercise) => (
                <S.SelectedTrainingListElement>
                  {exercise.name}
                </S.SelectedTrainingListElement>
              ))}
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
            {workout &&
              workout.exercises.map((exercise, index) => {
                const exerciseText = exercise?.name
                  ? exercise?.name.split("(")
                  : "";

                let valueInPercentage;
                if (exercise.quantity !== 0 && !isNaN(progressValues[index])) {
                  valueInPercentage = Math.round(
                    (progressValues[index] / exercise.quantity) * 100
                  );
                } else {
                  valueInPercentage = 0;
                }

                if (valueInPercentage > 100) {
                  valueInPercentage = 100;
                }
                return (
                  <S.TrainingProgressInPercentage>
                    <S.TrainingProgressElement>
                      {exerciseText[0]}
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
                );
              })}
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
