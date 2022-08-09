import React from 'react';
import Styled from 'styled-components';

const StyleReview = Styled.section`{
      white-space: pre-wrap;
      color: grey;
      text-indent: 30px;
      margin-top: 5px;
      border-bottom: 1px solid gray;
}`



export const Review = (props)=>{
    return(
<StyleReview>
<strong>{props.number}. </strong> <strong>{props.review.nickName}</strong>
<h5>{props.review.textReview}</h5>
</StyleReview>
    )
}