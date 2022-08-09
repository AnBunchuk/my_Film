import React from 'react';
import Styled from 'styled-components';

const InputNameStyle = Styled.div`
&& input{
    color:grey;
    font-size:18px;
    font-weight:bold;
}
&& input::placeholder{
    font-size:16px;
    color:grey;
    opacity: 0.5;
}
`
export const InputName = (props) =>{

    return( 
        <InputNameStyle>
        <input {...props}></input>
        </InputNameStyle>
    )
};