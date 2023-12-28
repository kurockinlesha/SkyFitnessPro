import { useState } from "react";
import * as S from "./App.styled";
import { WorkoutVideoPage } from "./components/workout-video-page/workout-video-page";
import { GlobalStyles } from "./global.styled";
import { MyProgress } from "./progress/progress";
import { CountedProgress } from "./progress/progress-counted";

function App() {
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
    <S.Wrapper>
      <GlobalStyles />
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
    </S.Wrapper>
  );
}

export default App;
