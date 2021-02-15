/*
eslint linebreak-style: ["error", "windows"]
*/
import React from 'react';
import styled from '@emotion/styled';

const Li = styled.li(
  {
    listStyleType: 'none',
    padding: '10px',
  },
);
const Img = styled.img(
  {
    width: '130px',
    height: '180px',
  },
);

const Cast = ({ row }) => {
  let img;
  if (row?.profile_path) {
    img = `http://image.tmdb.org/t/p/original${row.profile_path}`;
  } else {
    img = 'https://aikidojo.lv/wp-content/uploads/2019/08/nophoto.jpg';
  }

  return (
    <>
      <Li>
        <Img alt="photo" src={img} />
        {row.name}
      </Li>
    </>
  );
};

export default Cast;
