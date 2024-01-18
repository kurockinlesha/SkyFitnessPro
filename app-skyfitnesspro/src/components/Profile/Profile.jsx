// import React, { useState } from "react";
import * as S from "./ProfileStyle";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Login } from "../Login/Login";
import { Password } from "../Password/Password";
import { useState } from "react";
import { ChoiceWorkout } from "../choice-workout/ChoiceWorkout";
import { useAuth } from "../hooks/use-auth";
import { getAuth, updatePassword } from "firebase/auth";

const Profile = ({
  coursesFirebase,
  workoutsFirebase,
  selectedWorkoutId,
  password,
  selectedCourseId,
  setSelectedCourseId,
  setSelectedWorkoutId,
  logOut,
}) => {
  const [newPassword, setNewPassword] = useState("");

  const { isAuth, email } = useAuth();
  const navigate = useNavigate();
  // Состояние для модальных окон страницы профиля
  const [modalActiveLogin, setModalActiveLogin] = useState(false);
  const [modalActivePassword, setModalActivePassword] = useState(false);
  const [modalActiveTrainings, setModalActiveTrainings] = useState(false);

  const handleSelectCourse = (course) => {
    setSelectedCourseId(course._id);
    setModalActiveTrainings(true);
    console.log(selectedCourseId);
  };

  const selectedIds = ["ab1c3f", "kfpq8e", "q02a6i"];

  const filteredCourses = coursesFirebase.filter((course) =>
    selectedIds.includes(course._id)
  );

  const updateUserPassword = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    await updatePassword(user, newPassword)
      .then((response) => {
        // Update successful.
        console.log(response);
        setModalActivePassword(false);
        // logOut();
        navigate("/auth");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return isAuth ? (
    <S.ContainerProfile>
      <S.Header>
        <S.HeaderLogo>
          <NavLink to="/">
            <S.Img src="/img/logo-SkyFitnessPro.svg" alt="logo" />
          </NavLink>
        </S.HeaderLogo>
        <PersonalData email={email} logOut={logOut} />
      </S.Header>
      <S.Profile>
        <S.Heading>
          <S.ProfileHeading>Мой профиль</S.ProfileHeading>
          <S.ProfileText>Логин: {email}</S.ProfileText>
          <Login
            modalActiveLogin={modalActiveLogin}
            setModalActiveLogin={setModalActiveLogin}
          />
          <S.ProfileText>Пароль: {password}</S.ProfileText>
          <Password
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            modalActivePassword={modalActivePassword}
            setModalActivePassword={setModalActivePassword}
            updateUserPassword={updateUserPassword}
          />
        </S.Heading>
        <S.ProfileButton>
          <S.Button onClick={() => setModalActiveLogin(true)}>
            Редактировать логин
          </S.Button>
          <S.Button onClick={() => setModalActivePassword(true)}>
            Редактировать пароль
          </S.Button>
        </S.ProfileButton>
      </S.Profile>
      <S.Course>
        <S.ProfileHeading>Мои курсы</S.ProfileHeading>
        <S.CourseBox>
          {filteredCourses.map((course) => (
            <>
              <S.CourseItem key={course._id} courseid={course._id}>
                {/* <NavLink to={`/ChoiceWorkout/${course._id}`}> */}
                <S.ButtonLink
                  courseid={course._id}
                  onClick={() => handleSelectCourse(course)}
                >
                  Перейти
                </S.ButtonLink>
                {/* </NavLink> */}
              </S.CourseItem>
              <ChoiceWorkout
                modalActiveTrainings={modalActiveTrainings}
                setModalActiveTrainings={setModalActiveTrainings}
                workoutsFirebase={workoutsFirebase}
                coursesFirebase={coursesFirebase}
                selectedCourseId={selectedCourseId}
                selectedWorkoutId={selectedWorkoutId}
                setSelectedWorkoutId={setSelectedWorkoutId}
              />
            </>
          ))}
        </S.CourseBox>
      </S.Course>
    </S.ContainerProfile>
  ) : (
    navigate("/")
  );
};

export { Profile };

export const PersonalData = ({ email, logOut }) => {
  const [selectedOption, setSelectedOption] = useState("value1");
  const location = useLocation();
  const navigate = useNavigate();
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === "value2") {
      navigate("/profile");
    } else if (selectedValue === "value3") {
      logOut();
    }
  };
  return (
    <S.HeaderProfile>
      <S.HeaderSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-tect-logo"></use>
      </S.HeaderSvg>
      <S.HeaderSelect
        name="select"
        value={selectedOption}
        onChange={handleSelectChange}
        style={{
          backgroundColor: location.pathname === "/" ? "#271a58" : "#FAFAFA",
          color: location.pathname === "/" ? "#fff" : "#000",
        }}
      >
        <S.HeaderSelectOption value="value1">{email}</S.HeaderSelectOption>
        <S.HeaderSelectOption value="value2">Профиль</S.HeaderSelectOption>
        <S.HeaderSelectOption value="value3">Выйти</S.HeaderSelectOption>
      </S.HeaderSelect>
    </S.HeaderProfile>
  );
};
