import React from 'react';
import Styled from 'styled-components';
// import { useState } from 'react';
import { Review } from "./review"
// import {Infoblock} from './Infoblock'

const ReviewStyle = Styled.section`{
    margin: 5px 10px;
    line-height: 2;
    height:440px;
    overflow: auto;
  }
  && h3{
    font-size:1.5em;
  }`
export const Reviews = ({review}) => {
 

  return (

    <ReviewStyle>
      <h3>Отзывы:</h3>
      {review.map((review, index) =>
        <Review number={index + 1} review={review} key={review.id} />
      )}
    </ReviewStyle>
  );
}
