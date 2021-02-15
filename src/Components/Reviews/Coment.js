/*
eslint linebreak-style: ["error", "windows"]
*/
import React from 'react';
import styled from '@emotion/styled';

const Img = styled.img`
    padding: 10px 10px 10px 0px;
    width: 140px;
    height: 140px
    
`;
const DivContain = styled.div`
padding-top: 10px;
    display: flex;
`;
const DivImg = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;
const DivText = styled.div`
    padding-top: 10px;
`;
const Span = styled.span``;

const Coment = ({ row }) => {
  let img = row.author_details.avatar_path;
  if (img) {
    if (img.includes('secure.gravatar')) {
      img = `${row.author_details.avatar_path.slice(1)}`;
    } else {
      img = `http://image.tmdb.org/t/p/original${img}`;
    }
  } else {
    img = 'https://aikidojo.lv/wp-content/uploads/2019/08/nophoto.jpg';
  }
  console.log(img);
  return (
    <>
      <DivContain>
        <DivImg>
          <Img alt="avatar" src={img} />
          <Span>{row.author}</Span>
        </DivImg>
        <DivText>{row.content}</DivText>
      </DivContain>
    </>

  );
};

export default Coment;
