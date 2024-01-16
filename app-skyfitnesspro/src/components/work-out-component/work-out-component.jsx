import { useState } from "react";
import { WorkoutVideoPage } from "../workout-video-page/workout-video-page";
import { MyProgress } from "../progress/progress";
import { CountedProgress } from "../progress/progress-counted";

export const WorkOutComponent = ({ workoutsFirebase, selectedWorkoutId }) => {
  const [isMyProgressOpen, setIsMyProgressOpen] = useState(false);
  const [isMyProgressCounted, setIsMyProgressCounted] = useState(false);
  const [isErrorExist, setIsErrorExist] = useState(false);
  const [progressValues, setProgressValues] = useState([]);

  if (workoutsFirebase.length === 0) {
    return <p>Loading...</p>;
  }

  const workout =
  workoutsFirebase ?
  workoutsFirebase.find((workout) => workout._id === selectedWorkoutId) : "";

console.log(workout);

  const openModalWindow = () => {
    setIsMyProgressOpen(true);
  };

  const closeModalWindow = () => {
    console.log(progressValues.length);
    console.log(workout.exercises.length);
    if (progressValues.some(value => value === '')) {
      setIsMyProgressOpen(true);
      setIsErrorExist(true);
    } else {
      setIsMyProgressOpen(false);
      setIsMyProgressCounted(true);

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
      />
      <MyProgress
        progressValues={progressValues}
        setProgressValues={setProgressValues}
        isMyProgressOpen={isMyProgressOpen}
        closeModalWindow={closeModalWindow}
        isErrorExist={isErrorExist}
        workout={workout}
      />
      <CountedProgress isMyProgressCounted={isMyProgressCounted} />
    </>
  );
};
