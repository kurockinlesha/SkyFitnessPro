import React from "react";
import "./courseStyle.css";
export function Course() {
  return (
    <div class="wrapper">
      <div class="container">
        <use href="#">
          <img src="./img/logo.png" alt="logo" />
        </use>
        <div class="nameCourse">
          <h1 class="main__nameCourse">Йога</h1>
        </div>
        <h3 class="reasonCourse">Подойдет для вас, если:</h3>
        <div class="reasonsCourses">
          <div class="reasons">
            <div class="point">
              <p class="point_text">1</p>
            </div>
            <p class="type">
              Давно хотели попробовать йогу, но не решались начать.
            </p>
          </div>
          <div class="reasons">
            <div class="point">
              <p class="point_text">2</p>
            </div>
            <p class="type">
              Хотите укрепить позвоночник, избавиться от болей в спине и
              суставах.
            </p>
          </div>
          <div class="reasons">
            <div class="point">
              <p class="point_text">3</p>
            </div>
            <p class="type">Ищете активность, полезную для тела и души.</p>
          </div>
        </div>
        <h3 class="directionsCourse">Направления:</h3>
        <div class="directionsCourses">
          <ul class="typesList">
            <li class="type">Йога для новичков</li>
            <li class="type">Классическая йога</li>
            <li class="type">Йогатерапия</li>
          </ul>
          <ul class="typesList">
            <li class="type">Кундалини-йога</li>
            <li class="type">Хатха-йога</li>
            <li class="type">Аштанга-йога</li>
          </ul>
        </div>
        <div class="description">
          <p class="description__text">
            Благодаря комплексному воздействию упражнений происходит проработка
            всех групп мышц, тренировка суставов, улучшается циркуляция крови.
            Кроме того, упражнения дарят отличное настроение, заряжают бодростью
            и помогают противостоять стрессам.
          </p>
        </div>
        <div class="application">
          <p class="application__text">
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с
            выбором направления и тренера, с которым тренировки принесут
            здоровье и радость!
          </p>
          <button class="trainingButton">
            <p class="trainingText">Записаться на тренировку</p>
          </button>
          <div class="img">
            <img src="./img//phone.svg" alt="phone" />
          </div>
        </div>
      </div>
    </div>
  );
}
