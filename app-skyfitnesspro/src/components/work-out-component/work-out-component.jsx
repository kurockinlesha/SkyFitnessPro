import { useState } from "react";
import { WorkoutVideoPage } from "../workout-video-page/workout-video-page";
import { MyProgress } from "../progress/progress";
import { CountedProgress } from "../progress/progress-counted";

export const WorkOutComponent = ({
  workoutsFirebase,
  selectedWorkoutId,
  selectedCourseId,
  coursesFirebase,
  logOut,
}) => {
  const [isMyProgressOpen, setIsMyProgressOpen] = useState(false);
  const [isMyProgressCounted, setIsMyProgressCounted] = useState(false);
  const [isErrorExist, setIsErrorExist] = useState(false);

  const workout = workoutsFirebase
    ? workoutsFirebase.find((workout) => workout._id === selectedWorkoutId)
    : "";

  const workoutLength = workout.exercises.length;

  const [progressValues, setProgressValues] = useState(
    new Array(workoutLength).fill("")
  );

  const course =
    coursesFirebase &&
    coursesFirebase.find((course) => course._id === selectedCourseId);

    if (workoutsFirebase.length === 0) {
    return <p>Loading...</p>;
  }

  const openModalWindow = () => {
    setIsMyProgressOpen(true);
  };

  const closeModalWindow = () => {
    if (progressValues.some((value) => value === "")) {
      setIsMyProgressOpen(true);
      setIsErrorExist(true);
    } else {
      setIsMyProgressOpen(false);
      setIsMyProgressCounted(true);
      setIsErrorExist(false);

      setTimeout(() => {
        setIsMyProgressCounted(false);
      }, 2000);
    }
  };

  return (
    <>
      <WorkoutVideoPage
        progressValues={progressValues}
        openModalWindow={openModalWindow}
        workoutsFirebase={workoutsFirebase}
        workout={workout}
        course={course}
        logOut={logOut}
      />
      <MyProgress
        progressValues={progressValues}
        setProgressValues={setProgressValues}
        isMyProgressOpen={isMyProgressOpen}
        closeModalWindow={closeModalWindow}
        isErrorExist={isErrorExist}
        workout={workout}
      />
      {isMyProgressCounted ? (
        <CountedProgress title="Ваш прогресс засчитан!" />
      ) : null}
    </>
  );
};
