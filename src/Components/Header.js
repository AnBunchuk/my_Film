import React from 'react';
import Styled from 'styled-components';

const H1 = Styled.h1`{
    font-family: sans-serif;
    text-align: center;
    line-height: 2.0;
    font-size: 2em;
}`



export const Header = ()=>{
    return(
<H1>
Танцы с волками
</H1>
    )
}
