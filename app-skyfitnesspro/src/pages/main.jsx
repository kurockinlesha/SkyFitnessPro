import * as S from "./mainStyle";
import React from "react";
import { Header } from "../components/header/header";
import { Courses } from "../components/courses/courses";
let ButtonTop = document.getElementById("ButtonScrollMain");
function ScrollTop(){
  let topPos = ButtonTop.offsetTop(1448);
  return(
    topPos
  )
};
export function MainPage() {
  return (
    <>
      <S.Wrapper className="wrapper">
        <S.Container className="container">
          <S.Main className="main">
            <Header/>
            
            <Courses/>
            <S.ButtonScroll>
            <S.ButtonScrollMain
            //   onClick={scroll}
            onclick={ScrollTop()}
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
