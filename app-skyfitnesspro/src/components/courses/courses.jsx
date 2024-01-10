import React from "react";
import * as S from './coursesStyle';
import yoga from '../../img/yoga.png'
import stretch from "../../img//stretch.png";
import danceFitness from "../../img/danceFitness.svg";
import stepAerobics from "../../img/stepAerobics.svg";
import bodyFlex from "../../img/bodyFlex.png";
import { NavLink } from "react-router-dom";

export function Courses() {
   
    return(
       
         <S.ProductBox>
         <S.ProductContent >
         <NavLink to="/Course">
            <S.Product >
                <img src={yoga} alt="product"/> 
                
            </S.Product>
            </NavLink>
            <NavLink to="/Course">
            <S.Product >
                <img src={stretch} alt="product" />
            </S.Product>
            </NavLink>
            <NavLink to="/Course">
            <S.Product >
                <img src={danceFitness} alt="product" /> 
            </S.Product>
            </NavLink>
            <NavLink to="/Course">
            <S.Product>
                <img  src={stepAerobics} alt="product" />              
            </S.Product>
            </NavLink>
            <NavLink to="/Course">
            <S.Product >
                <img src={bodyFlex} alt="product" /> 
            </S.Product>
            </NavLink>
        </S.ProductContent>
        </S.ProductBox>

               
    )
}