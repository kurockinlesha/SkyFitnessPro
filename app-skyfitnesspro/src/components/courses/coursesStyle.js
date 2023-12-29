import styled from "styled-components";
export const ProductBox = styled.div`
margin-top: 52px;
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    gap: 37px;
    justify-content: center;
    align-items: center;
    justify-items: center;
`;
export const ProductContent = styled.div`
margin-top: 52px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;
`;


export const Product = styled.div`
  
            display: flex;
         flex-direction: column;
         transition: all 0.3s;
      
         box-sizing: border-box;
         &:hover{
            transform: scale(1.05);
           
        `;
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
