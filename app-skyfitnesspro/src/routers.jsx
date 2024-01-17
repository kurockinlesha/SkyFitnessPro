import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/MainPage";
import { Header } from "./components/header/header";
import { Profile } from "./components/Profile/Profile";
import { Course } from "./components/course/Course";
import { Password } from "./components/Password/Password";
import { WorkOutComponent } from "./components/work-out-component/work-out-component";
import { Auth } from "./pages/auth/Auth";
import { Reg } from "./pages/reg/Reg";
import { Login } from "./components/Login/Login";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import React, { useEffect, useState} from "react";
import { app } from "./components/firebase/firebase";
import { getUserLessons, auth } from "./components/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signIn } from "./components/store/actions/creators";
import { ProtectedRoute } from "./components/navigate";
import { useDispatch } from "react-redux";

export const AppRoutes = () => {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  //workouts: наименование курса, видео, упражнения
  const [workoutsFirebase, setWorkoutsFirebase] = useState([]);
  //courses: напрввления, описания, наименование на рус и англ, workouts
  const [coursesFirebase, setCoursesFirebase] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        (async () => {
          try {
            const userData = await getUserLessons();
            dispatch(signIn(userData));
            setUserData(userData);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        })();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  console.log(workoutsFirebase);
  console.log(coursesFirebase);


  return (
    <Routes>
      <Route element={<ProtectedRoute userData={userData} />} />
      <Route
          path="/"
          element={<Header userData={userData} setUserData={setUserData} />}
        />
      <Route path="/auth" element={<Auth />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/Profile" element={<Profile />} />

      <Route path="/Course" element={<Course />} />
      <Route path="/Password" element={<Password />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/WorkoutVideoPage" element={<WorkOutComponent />} />
      {/* <Course /> */}
      {/* <Password /> */}
      {/* <ChoiceWorkout/> */}
    </Routes>
  );
}
export default AppRoutes;
