import styled from 'styled-components'
export const ProductBox = styled.div`
    padding-top: 64px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    
    color: #000000;`
export const ProductContent = styled.div`
        margin-top: 32px;
        display: flex;
        column-gap: 32px;
        row-gap: 56px;
        flex-wrap: wrap;
        justify-items: center;
        `
  
export const  ProductName = styled.a`
        margin-top: 10px;
        margin-bottom: 9px;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        color:black;
        font-family: 'Montserrat';
        font-style: normal;
    `
export const Product = styled.div`
            width: 378px; 
            display: flex;
         flex-direction: column;
         transition: all 0.3s;
         padding: 16px;
         box-sizing: border-box;
         &:hover{
            transform: scale(1.05);
            box-shadow: 0 0 5px #ffffff;
        `
// export const CardYoga = styled.img`
// position: absolute;
// `;
// export const CardStretch = styled.img`
// position: absolute;

// `;
// export const CardDanceFitness = styled.img`
// position: absolute;

// `;
// export const CardStepAerobics = styled.img`
// position: absolute;

// `;
// export const CardBodyFlex = styled.img`
// position: absolute;
  
// `;



