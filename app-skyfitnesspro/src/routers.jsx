import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { Profile } from "./components/Profile/Profile";
import { Course } from "./components/course/Course";
import { Password } from "./components/Password/Password";
import { WorkOutComponent } from "./components/work-out-component/work-out-component";
import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg"
import { Login } from "./components/Login/Login";
import { ChoiceWorkout } from "./components/choice-workout/ChoiceWorkout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/Profile" element ={<Profile />}/>
      
      <Route path="/Course" element={<Course/>}/>
      <Route path="/Password" element={<Password/>}/>
      <Route path="/Login" element={<Login/>}/>

      <Route path="/WorkoutVideoPage" element={<WorkOutComponent/>}/>
        {/* <Course /> */}
        {/* <Password /> */}
        {/* <ChoiceWorkout/> */}
    </Routes>
  );
}
export default AppRoutes;