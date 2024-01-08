import React from "react";
import "./choiceWorkoutStyle.css";
const ChoiceWorkout = () => {
  return (
    <div className="Wrapper__choice-workout">
      <div className="Conteiner__choice-workout">
        <div className="choice-workout">
          <h1 className="choice-workout-heading">Выберите тренировку</h1>
          <div className="choice-workout-box">
            <div className="choice-workout-item ">
              <label htmlFor="check">
                <input
                  className="real-checkbox"
                  type="checkbox"
                  name="choice-workout"
                  id="check"
                />
                <span className="custom-checkbox"></span>
                <div className="item-text">
                  <div className="item-text-title">Утренняя практика</div>
                  <div className="item-text-day">
                    Йога на каждый день / 1 день
                  </div>
                </div>
              </label>
            </div>
            <div className="choice-workout-item">
              <label htmlFor="check-1">
                <input
                  className="real-checkbox"
                  type="checkbox"
                  name="choice-workout"
                  id="check-1"
                />
                <span className="custom-checkbox"></span>
                <div className="item-text">
                  <div className="item-text-title">Красота и здоровье</div>
                  <div className="item-text-day">
                    Йога на каждый день / 2 день
                  </div>
                </div>
              </label>
            </div>
            <div className="choice-workout-item">
              <label htmlFor="check-2">
                <input
                  className="real-checkbox"
                  type="checkbox"
                  name="choice-workout"
                  id="check-2"
                />
                <span className="custom-checkbox"></span>
                <div className="item-text">
                  <div className="item-text-title">Асаны стоя</div>
                  <div className="item-text-day">
                    Йога на каждый день / 3 день
                  </div>
                </div>
              </label>
            </div>
            <div className="choice-workout-item">
              <label htmlFor="check-3">
                <input
                  className="real-checkbox"
                  type="checkbox"
                  name="choice-workout"
                  id="check-3"
                />
                <span className="custom-checkbox"></span>
                <div className="item-text item-text-block">
                  <div className="item-text-title item-text-title-block">Растягиваем мышцы бедра</div>
                  <div className="item-text-day">
                    Йога на каждый день / 4 день
                  </div>
                </div>
              </label>
            </div>
            <div className="choice-workout-item">
              <label htmlFor="check-4">
                <input
                  className="real-checkbox"
                  type="checkbox"
                  name="choice-workout"
                  id="check-4"
                />
                <span className="custom-checkbox"></span>
                <div className="item-text">
                  <div className="item-text-title">Гибкость спины</div>
                  <div className="item-text-day">
                    Йога на каждый день / 5 день
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ChoiceWorkout };
