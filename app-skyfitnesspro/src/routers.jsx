import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { Profile } from "./components/Profile/Profile";
import { Course } from "./components/course/Course";
import { WorkOutComponent } from "./components/work-out-component/work-out-component";
import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import React, { useEffect, useState } from "react";
import { app } from "./components/firebase/firebase";


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

  const [selectedWorkoutId, setSelectedWorkoutId] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage coursesFirebase={coursesFirebase} />}
      />
      <Route
        path="/auth"
        element={
          <Auth
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            // handleChange={handleChange}
            // handleLogin={handleLogin}
          />
        }
      />
      <Route
        path="/reg"
        element={
          <Reg
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            // handleChange={handleChange}
            // handleReg={handleReg}
          />
        }
      />
      <Route
        path="/course/:courseId"
        element={<Course coursesFirebase={coursesFirebase} />}
      />

          <Route
            path="/profile"
            element={
              <Profile
                coursesFirebase={coursesFirebase}
                workoutsFirebase={workoutsFirebase}
                selectedWorkoutId={selectedWorkoutId}
                setSelectedWorkoutId={setSelectedWorkoutId}
                password={password}
              />
            }
          />

          <Route
            path="/workoutVideoPage"
            element={
              <WorkOutComponent
                workoutsFirebase={workoutsFirebase}
                selectedWorkoutId={selectedWorkoutId}
              />
            }
          />
  
    </Routes>
  );
}
export default AppRoutes;
