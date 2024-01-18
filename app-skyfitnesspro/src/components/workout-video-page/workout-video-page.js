import { NavLink, useNavigate } from "react-router-dom";
import * as S from "./workout-video-page.styled";
import * as Style from "../Profile/ProfileStyle";
import { PersonalData } from "../Profile/Profile";
import { useAuth } from "../hooks/use-auth";

export const WorkoutVideoPage = ({
  progressValues,
  openModalWindow,
  workoutsFirebase,
  workout,
  course,
  logOut
}) => {
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();
  // const workoutName = workout?.name ? workout?.name.split("/") : "";
  // const workoutCourseName = workoutName[0];
  // workoutName && workoutName.shift();
  // const workoutCourseText = workoutName && workoutName.join("/");

  return isAuth ? (
    <>
      <Style.Header>
        <Style.HeaderLogo>
          <NavLink to="/">
            <Style.Img src="/img/logo-SkyFitnessPro.svg" alt="logo" />
          </NavLink>
        </Style.HeaderLogo>
        <PersonalData email={email} logOut={logOut} />
      </Style.Header>
      <S.SelectedCourseTitle>{course.nameRU}</S.SelectedCourseTitle>
      <S.SelectedTrainingTitle>{workout.name}</S.SelectedTrainingTitle>
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
                } else if(valueInPercentage < 0) {
                  valueInPercentage = 0;
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
  ) : (
    navigate("/")
  );
};
