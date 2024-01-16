import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { Profile } from "./components/Profile/Profile";
import { Course } from "./components/course/Course";
// import { Password } from "./components/Password/Password";
import { WorkOutComponent } from "./components/work-out-component/work-out-component";
import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg";
// import { Login } from "./components/Login/Login";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import React, { useEffect, useState } from "react";
import { app } from "./components/firebase/firebase";
// import { ChoiceWorkout } from "./components/choice-workout/ChoiceWorkout";

export function AppRoutes() {
  
  //workouts: наименование курса, видео, упражнения
  const [workoutsFirebase, setWorkoutsFirebase] = useState([]);
  //courses: напрввления, описания, наименование на рус и англ, workouts
  const [coursesFirebase, setCoursesFirebase] = useState([]);

  useEffect(() => {
    const fb = firebase.database(app);
    const fetchData = async () => {
      try {
        const workoutsRef = fb.ref("workouts");
        await workoutsRef.once("value").then((snapshot) => {
          const trainings = Object.values(snapshot.val() || {});
          setWorkoutsFirebase(trainings);
        });
      } catch (error) {
        console.error("Error getting documents (workouts): ", error);
      }
    };
    fetchData();

    const fetchCoursesData = async () => {
      try {
        const coursesRef = fb.ref("courses");
        await coursesRef.once("value").then((snapshot) => {
          const trainings = Object.values(snapshot.val() || {});
          setCoursesFirebase(trainings);
        });
      } catch (error) {
        console.error("Error getting documents (courses): ", error);
      }
    };
    fetchCoursesData();
  }, []);

  console.log(workoutsFirebase);
  console.log(coursesFirebase);
  
  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reg" element={<Reg />} />
      <Route
        path="/Profile"
        element={
          <Profile
            coursesFirebase={coursesFirebase}
            workoutsFirebase={workoutsFirebase}
            selectedWorkoutId={selectedWorkoutId}
            setSelectedWorkoutId={setSelectedWorkoutId}
          />
        }
      />
      {/* <Route path="/ChoiceWorkout/:courseId" element={<ChoiceWorkout coursesFirebase={coursesFirebase} workoutsFirebase={workoutsFirebase} />} /> */}

      <Route path="/Course" element={<Course />} />
      {/* <Route path="/Password" element={<Password />} />
      <Route path="/Login" element={<Login />} /> */}

      <Route
        path="/WorkoutVideoPage"
        element={
          <WorkOutComponent
            workoutsFirebase={workoutsFirebase}
            selectedWorkoutId={selectedWorkoutId}
          />
        }
      />
      {/* <Course /> */}
      {/* <Password /> */}
      {/* <ChoiceWorkout/> */}
    </Routes>
  );
}
export default AppRoutes;
