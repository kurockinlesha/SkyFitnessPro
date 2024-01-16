import React from "react";
import * as S from "./coursesStyle";
import yoga from "../../img/yoga.png";
import stretch from "../../img//stretch.png";
import danceFitness from "../../img/danceFitness.svg";
import stepAerobics from "../../img/stepAerobics.svg";
import bodyFlex from "../../img/bodyFlex.png";
import { NavLink } from "react-router-dom";

export function Courses({ coursesFirebase }) {
  coursesFirebase.sort((a, b) => a.order - b.order);
  return (
    <S.ProductBox>
      <S.ProductContent>
        {coursesFirebase.map((course) => {
          return (
            <NavLink key={course._id} to={`/course/${course._id}`}>
              <S.Product>
                <img
                  src={
                    course._id === "ab1c3f"
                      ? yoga
                      : course._id === "kfpq8e"
                      ? stretch
                      : course._id === "ypox9r"
                      ? danceFitness
                      : course._id === "6i67sm"
                      ? stepAerobics
                      : bodyFlex
                  }
                  alt="product"
                />
              </S.Product>
            </NavLink>
          );
        })}
      </S.ProductContent>
    </S.ProductBox>
  );
}
