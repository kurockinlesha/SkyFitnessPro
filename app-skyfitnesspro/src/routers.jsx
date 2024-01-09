import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { Profile } from "./components/Profile/Profile";
import { Course } from "./components/Profile/ProfileStyle";
import { Password } from "./components/Password/Password";
import { WorkoutVideoPage } from "./components/workout-video-page/workout-video-page";
import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg"
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/reg" element={<Reg/>}/>
      <Route path="/Profile" element ={<Profile />}/>
      
      <Route path="/Course" element={<Course/>}/>
      <Route path="/Password" element={<Password/>}/>
      <Route path="/WorkoutVideoPage" element={<WorkoutVideoPage/>}/>
        {/* <Course /> */}
        {/* <Password /> */}
        {/* <ChoiceWorkout/> */}
    </Routes>
    
  );
}
export default AppRoutes;