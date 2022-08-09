import React from 'react';
import Styled from 'styled-components';
import { useState } from 'react';

import { Header } from './Header'
import { ButtonReview } from './ButtonReview'
import { InputName } from './InputName'
import { InputTextReview } from './InputTextReview'
// import Review  from './Reviews'

const InfoblockStyle = Styled.section`{
    width: 450px;
    height: 500px;
    padding: 0 10px;
    font-family: sans-serif;
    text-align: start;
    line-height: 2;
}
&& span{
    color:grey;
    font-size:0.8em;
}
`

export const Infoblock = ({ review, setReview }) => {
    const [nickName, setNickName] = useState();
    const [textReview, setTextReview] = useState();

    const addNewReview = (e) => {
        e.preventDefault()
        const newReview = {
            id: Date.now(),
            nickName,
            textReview
        }
        setReview([...review, newReview]);
        setNickName('');
        setTextReview('');
    };

    return (
        <InfoblockStyle>
            <Header />
            <h3>Историческая драмма, вестерн</h3>
            <h3>Мировая премьера: <span> 19 октября 1990 года</span> </h3>
            <h3> Продолжительность: <span>183 мин.</span> </h3>
            <h3>Актеры:<span> Кевин Костнер, Мэри Макдоннелл, Грэм Грин, Родни Грант,
                Флойд Вестерман, Уэс Стьюди</span></h3>
            <form action="hz" name="review" autocomplite="Оставьте отзыв">
                <fieldset>
                    <legend><h3>Оставить отзыв</h3></legend>
                    <InputName
                        value={nickName}
                        onChange={e => setNickName(e.target.value)}
                        type='text'
                        placeholder='Ваше имя' minLength="3" maxLength="14">
                    </ InputName>
                    <InputTextReview
                        value={textReview}
                        onChange={e => setTextReview(e.target.value)}
                        rows='7' cols="45"
                        name="text" placeholder="Оставьте свой отзыв" maxLength="300">
                    </InputTextReview>
                </fieldset>
                <ButtonReview
                    onClick={addNewReview}>Отправить
                </ButtonReview>
            </form>
        </InfoblockStyle >
    );
}