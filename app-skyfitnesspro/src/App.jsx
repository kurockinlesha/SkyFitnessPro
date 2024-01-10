// import { Password } from "./components/Password/Password";
// import { Login } from "./components/Login/Login";
import * as S from "./AppStyle";
import React from "react";
// import { Profile } from "./components/Profile/Profile";
import { GlobalStyled } from "./GlobalAppStyle";
// import { WorkOutComponent } from "./components/work-out-component/work-out-component";
// import { MainPage } from "./pages/main/MainPage";
// import { Course } from "./components/course/Course";
//import { ChoiceWorkout } from "./components/choice-workout/ChoiceWorkout";
import AppRoutes from "./routers";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <S.Wrapper
      style={{
        backgroundColor: location.pathname === "/" ? "#271a58" : "#FAFAFA",
      }}
    >
      <S.Container>
        <AppRoutes />
        {/* <MainPage /> */}
        {/* <Profile /> */}
        {/* <Course /> */}
        {/* <Password /> */}
        {/* <ChoiceWorkout/> */}
      </S.Container>
      <GlobalStyled />
      {/* <GlobalStyles /> */}
      {/* <WorkOutComponent /> */}
    </S.Wrapper>
  );
}

export default App;
