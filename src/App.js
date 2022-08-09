import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {App} from './App';
// import { Header } from './Components/Header';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';


import { Poster } from './Components/Poster';
import { Infoblock } from './Components/Infoblock';
import { Reviews } from './Components/Reviews';
import Post from '../src/Data/ReviewsData.json'


const GlobalStyle = createGlobalStyle` * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  display: grid;
  grid-template-columns: 450px 450px 1fr;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: lightslategray;
}


@media screen and (max-width: 1270px) {
  #root {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr;
  }
  PosterStyle {
    grid-area: 1/1/2/2;
  }
  InfoblockStyle {
    grid-area: 1/2/2/3;
  }
  <RewiewsStyle /> {
    width: 100%;
    color: red;
    grid-area: 2/1/3/3;
  }
}

@media screen and (max-width: 970px) {
  #root {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr;
  }
  InfoblockStyle {
    grid-area: 1/1/2/2;
  }
  InfoblockStyle {
    grid-area: 2/1/3/3;
  }
  <Reviews /> {
    /* width: 100%; */
    color: red;
    grid-area: 3/1/4/4;
  }
}`

// [
//   { id: 1, nickName: 'an-24', textReview: "Столкновение двух цивилизаций, двух философий жизни. Молох неизбежности и безисходности прихода Левиафана - жестокой и всепоглощающей цивилизации Запада. Как в этом мире не потерять себя?"},
//   { id: 2, nickName: 'Corvin', textReview: "Кто ты, пляшуший среди волков? Где твое настоящее племя? Что касается меня, то я лучше станцую танго с серыми братьями', чем пожму руку некоторым прямоходящим. От волков точно знаешь, чего ждать. Они жестокие хищники.Они едят сырое мясо.Они не такие, как мы. И они не способны на подлость."},
//   { id: 3, nickName: 'Юрий Артамонов', textReview: 'Фильм действительно хорош, рекомендую посмотреть тем, кто интересуется культурой народов, не только своего. Взаимоотношениями между разными народами, где-то наверно камуникабельность, где-то желание выслушать и понять другого человека, воспитанного в другой культурной среде. Чувствуется Костнеровский почерк в манере повествования. Ну не верится, что такой человек способен на подлость. Приятного просмотра всем.' },
//   { id: Date.now(), nickName: 'sheet', textReview: 'Всё замечательно. И Костнер периода своего актёрского рассвета, и с ролью режиссёра справился довольно умело. И "дикий запад", показанный неожиданно камерально и природно. А самое главное, индейская тематика, выведенная не картонно, а вполне первым планом, то есть полноценно. А далее уже неважно, насколько были алчными и безжалостными белые захватчики, в том числе и формальные герои гражданской войны - северяне в мундирах. Не очень важна, а скорее просто ожидаема, и романтическая линия в сюжете. И даже милый волк, это всего лишь декорация. К зрелищу этническому, экологическому, историческому, приключенческому... Да мало ли можно найти эпитетов!' },

// ]


export const App = () => {

  // console.dir(Post);
  // let librari = JSON.stringify(Post);
  // console.log('librari' + librari);
  // let relibrari = JSON.parse(librari)
  // console.log(relibrari);

  const [review, setReview] = useState(Post)
  
  return (
    <>
      <GlobalStyle />
      <Poster />
      <Infoblock setReview={setReview} review={review} />
      <Reviews review={review} />
    </>
  )
};
