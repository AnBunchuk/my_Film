import React from 'react';
import Styled from 'styled-components';
import Photo from "../Images/DW1.jpg";

const PosterStyle = Styled.section`{
    //   color: #ccc;
      width: 450px;
      height: 500px;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
    }`
    const Img = Styled.img`
    {
              width: 160%;
              height: 100%;
              margin-left:-170px
    }`

export const Poster = () => {
    return(
<PosterStyle>
    <Img src={Photo} alt="Dances with Wolves"></Img>
</PosterStyle>
    )
}
