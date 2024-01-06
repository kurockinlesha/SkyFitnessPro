import * as S from "./mainStyle";
import React from "react";
import { Header } from "../../components/header/header";
import { Courses } from "../../components/courses/courses";
// import { Link, animateScroll as scroll } from 'react-scroll';
export const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
export function MainPage() {
  return (
    <>
      <S.Wrapper className="wrapper">
        <S.Container className="container">
          <S.Main className="main">
            <Header />

            <Courses />
            <S.ButtonScroll>
              <S.ButtonScrollMain
                //   onClick={scroll}
                onClick={scrollToTop}
                title="Наверх"
                id="ButtonScrollMain"
                className="ButtonScrollMain"
              >
                Наверх
              </S.ButtonScrollMain>
            </S.ButtonScroll>
          </S.Main>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
