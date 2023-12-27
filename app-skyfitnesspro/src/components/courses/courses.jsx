import React from "react";
import * as S from './coursesStyle';
import yoga from '../../img/yoga.png'
import stretch from "../../img//stretch.png";
import danceFitness from "../../img/danceFitness.svg";
import stepAerobics from "../../img/stepAerobics.svg";
import bodyFlex from "../../img/bodyFlex.png";
export function Courses() {
   
    return(
       
         <S.ProductBox className="product_box center">
         <S.ProductContent className="product-content">

            <S.Product className="product">
                <img src={yoga} alt="product" class="card__img_yoga"/> 
            </S.Product>

            <S.Product className="product">
                <img src={stretch} alt="product" class="card__img_stretch"/>
            </S.Product>

            <S.Product className="product">
                <img src={danceFitness} alt="product" class="card__img_danceFitness"/> 
            </S.Product>

            <S.Product className="product">
                <img  src={stepAerobics} alt="product" class="card__img_stepAerobics"/>              
            </S.Product>

            <S.Product className="product">
                <img src={bodyFlex} alt="product" class="product_img"/> 
            </S.Product>
        </S.ProductContent>
        </S.ProductBox>

               
    )
}