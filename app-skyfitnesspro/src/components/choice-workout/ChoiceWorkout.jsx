import React from "react";
import * as S from "./ChoiceWorkout.styled";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

const ChoiceWorkout = ({
  coursesFirebase,
  workoutsFirebase,
  modalActiveTrainings,
  setModalActiveTrainings,
  selectedCourseId,
  selectedWorkoutId,
  setSelectedWorkoutId,
}) => {
  // const { courseId } = useParams();
  // console.log("selectedCourse.id", selectedCourseId);

  const navigate = useNavigate();

  const course =
    coursesFirebase.length > 0 &&
    coursesFirebase.find((course) => course._id === selectedCourseId);
  // console.log(course);

  const workouts = course?.workouts || [];
  // console.log(workouts);

  const courseWorkouts =
    workoutsFirebase.length > 0 &&
    workoutsFirebase.filter((workout) => workouts.includes(workout._id));
  // console.log(courseWorkouts);

  const handleChoseWorkout = (workout) => {
    setSelectedWorkoutId(workout._id);
    setTimeout(() => {
      navigate("/workoutVideoPage");
    }, 2 * 1000);
    console.log(selectedWorkoutId);
  };

  return (
    <>
      {modalActiveTrainings && (
        <S.ChoiceWorkoutWrapper onClick={() => setModalActiveTrainings(false)}>
          <S.ChoiceWorkoutContainer onClick={(e) => e.stopPropagation()}>
            <S.ChoiceWorkoutHeading>Выберите тренировку</S.ChoiceWorkoutHeading>
            <S.ChoiceWorkoutBox>
              {courseWorkouts.length > 0 &&
                courseWorkouts.map((workout) => {
                  const workoutName = workout.name.split("/");
                  const workoutCourseName = workoutName[0];
                  workoutName.shift();
                  const workoutCourseText = workoutName.join("/");
                  // console.log(workoutText);
                  // console.log(workoutName);
                  return (
                    <S.ChoiceWorkoutItem
                      key={workout._id}
                      onClick={() => handleChoseWorkout(workout)}
                    >
                      <label htmlfor="check">
                        <S.RealCheckbox
                          type="checkbox"
                          name="choice-workout"
                          id="check"
                        />
                        <S.CustomCheckbox></S.CustomCheckbox>
                        <S.ItemText>
                          <S.ItemTextTitle>{workoutCourseName}</S.ItemTextTitle>
                          <S.ItemTextDay>{workoutCourseText}</S.ItemTextDay>
                        </S.ItemText>
                      </label>
                    </S.ChoiceWorkoutItem>
                  );
                })}
            </S.ChoiceWorkoutBox>
          </S.ChoiceWorkoutContainer>
        </S.ChoiceWorkoutWrapper>
      )}
    </>
  );
};

export { ChoiceWorkout };
