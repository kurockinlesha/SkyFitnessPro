import React from "react";
import * as S from './coursesStyle';
import yoga from '../../img/logo.svg'
import stretch from "../../img//stretch.png";
import danceFitness from "../../img/danceFitness.svg";
import stepAerobics from "../../img/stepAerobics.svg";
import bodyFlex from "../../img/bodyFlex.png";
export function Courses() {
   
    return(
       
         <S.ProductBox className="product_box center">
         <S.ProductContent className="product-content">
              <S.Product className="product">
                  <use src={yoga} alt="product" class="card__img_yoga"> </use>
                  <S.ProductName className="product_name" xlinkHref="#">Йога</S.ProductName>
                  
                  
                     
                     
                  </S.Product>
                  <S.Product className="product">
                  <use src={stretch} alt="product" class="card__img_stretch"> </use>
                  <S.ProductName className="product_name" xlinkHref="#">Стретчинг</S.ProductName>
                  
                  
                     
                     
                  </S.Product>
                  <S.Product className="product">
                  <use src={danceFitness} alt="product" class="card__img_danceFitness"> </use>
                  <S.ProductName className="product_name" xlinkHref="#">Танцевальный фитнес</S.ProductName>
                  
                  
                     
                     
                  </S.Product>
                  <S.Product className="product">
                  <use  src={stepAerobics} alt="product" class="card__img_stepAerobics"> </use>
                  <S.ProductName className="product_name" xlinkHref="=#">Степ-аэробика</S.ProductName>
                  
                  
                     
                     
                  </S.Product>
                  <S.Product className="product">
                  <use src={bodyFlex} alt="product" class="product_img"> </use>
                  <S.ProductName className="product_name" xlincard__img_bodyFlexkHref="product.html">Бодифлекс</S.ProductName>
                  
                  
                     
                     
                  </S.Product>
                  </S.ProductContent>
                  </S.ProductBox>

               
    )
}