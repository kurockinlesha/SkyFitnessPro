import { useEffect, useState } from "react";
import { WorkoutVideoPage } from "../workout-video-page/workout-video-page";
import { MyProgress } from "../progress/progress";
import { CountedProgress } from "../progress/progress-counted";
import { db } from "../firebase/firebase";

export const WorkOutComponent = () => {
  const [dataFirebase, setDataFirebase] = useState([]);

  useEffect(() => {
    db.collection("courses")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        const trainings = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          trainings.push(doc.data());
        });

        setDataFirebase(trainings);
       
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
 
  }, []);
 
  console.log(dataFirebase);

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
