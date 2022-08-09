import React from 'react';
import Styled from 'styled-components';

const InputTextReviewStyle = Styled.div`
&& textarea{
    color:black;
    font-size:16px;
    text-indent: 30px;
}
`

export const InputTextReview = (props) =>{

    return( 
        <InputTextReviewStyle>
        <textarea {...props}></textarea>
        </InputTextReviewStyle>
    )
};