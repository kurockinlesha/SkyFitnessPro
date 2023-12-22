import * as S from './mainStyle';
import React from 'react';
import { Header } from '../components/header/header';
import { Courses } from '../components/courses/courses';
export function MainPage  ()  {
    return(
<>    
<S.Wrapper className="wrapper">
    <S.Container className='container'>
        <S.Main className='main'>
            <Header></Header>
            <Courses></Courses>
            <S.ButtonScrollMain
            //onClick={scroll}
            type='button'
            className='ButtonScrollMain'
            >
Наверх
            </S.ButtonScrollMain>
        </S.Main>
    </S.Container>
</S.Wrapper>
</>
);
}