import React from 'react';
import styled from '@emotion/styled';
const Li = styled.li(
    {
        listStyleType: "none",
        padding: "10px"
    }
)
const Img = styled.img(
    {
        width: "130px",
        height: "180px"
    }
)
/* eslint-disable react/prop-types */

let Cast = (props) => {
    let img;
    (props.row.profile_path) ?
        img = `http://image.tmdb.org/t/p/original${props.row.profile_path}` :
        img = `https://aikidojo.lv/wp-content/uploads/2019/08/nophoto.jpg`;
    return (
        <>

            <Li><Img alt="photo" src={img}></Img>
                {props.row.name}</Li>
        </>
    )
}
/* eslint-enable react/prop-types */

export default Cast;