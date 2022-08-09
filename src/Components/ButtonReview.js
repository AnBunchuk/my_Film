import React from 'react';
import Styled from 'styled-components';

const ButtonReviewStyle = Styled.button`{
    color: black;
}
`
export const ButtonReview = ({children, ...props}) =>{

    return(
        <ButtonReviewStyle{...props}>
        {children}
        </ButtonReviewStyle>
    )
}