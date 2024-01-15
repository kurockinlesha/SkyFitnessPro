import { useState } from "react";
import { WorkoutVideoPage } from "../workout-video-page/workout-video-page";
import { MyProgress } from "../progress/progress";
import { CountedProgress } from "../progress/progress-counted";

export const WorkOutComponent = ({ workoutsFirebase, selectedWorkoutId }) => {
  const [isMyProgressOpen, setIsMyProgressOpen] = useState(false);
  const [isMyProgressCounted, setIsMyProgressCounted] = useState(false);
  const [isErrorExist, setIsErrorExist] = useState(false);
  const [progressValue, setProgressValue] = useState("");
  const [progressValueSecond, setProgressValueSecond] = useState("");
  const [progressValueThird, setProgressValueThird] = useState("");

  const openModalWindow = () => {
    setIsMyProgressOpen(true);
  };

  const closeModalWindow = () => {
    if (
      progressValue === "" ||
      progressValueSecond === "" ||
      progressValueThird === ""
    ) {
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
        progressValue={progressValue}
        openModalWindow={openModalWindow}
        progressValueSecond={progressValueSecond}
        progressValueThird={progressValueThird}
        workoutsFirebase={workoutsFirebase}
        selectedWorkoutId={selectedWorkoutId}
      />
      <MyProgress
        progressValue={progressValue}
        progressValueSecond={progressValueSecond}
        progressValueThird={progressValueThird}
        setProgressValue={setProgressValue}
        setProgressValueSecond={setProgressValueSecond}
        setProgressValueThird={setProgressValueThird}
        isMyProgressOpen={isMyProgressOpen}
        closeModalWindow={closeModalWindow}
        isErrorExist={isErrorExist}
      />
      <CountedProgress isMyProgressCounted={isMyProgressCounted} />
    </>
  );
};
