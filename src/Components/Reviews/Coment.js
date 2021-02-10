import React from 'react';
import styled from '@emotion/styled';
const Img = styled.img(
    {
        padding: "10px",
        width: "140px",
        height: "140px"
    }
)
const DivContain = styled.div(
    {
        paddingTop: "20px",
        display: "flex",
        justifyContent: "flex-start"
    }
)
const DivImg = styled.div(
    {
    }
)
const DivText = styled.div(
    {
      

    }
)
const Span = styled.span(
    {
    }
)
/* eslint-disable react/prop-types */

let Coment = (props) => {
    let img = props.row.author_details.avatar_path;
    img ? ((!img.includes('secure.gravatar')) ?
        img = `http://image.tmdb.org/t/p/original${props.row.author_details.avatar_path}`
        :
        img = img.slice(1)) :
        img = `https://aikidojo.lv/wp-content/uploads/2019/08/nophoto.jpg`


    return (
        <>
            <DivContain>
                <DivImg>
                    <Img alt="avatar" src={img}></Img>

                    <Span>{props.row.author}</Span>
                </DivImg>


                <DivText>{props.row.content}</DivText>

            </DivContain>
        </>

    )
}
/* eslint-enable react/prop-types */

export default Coment;