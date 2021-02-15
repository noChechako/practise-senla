/*
eslint linebreak-style: ["error", "windows"]
*/
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import React from 'react';

const DivContent = styled.div(
  {
    margin: '10px',
    border: '1px solid #e3e3e3',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '20px',
    width: '220px',
    height: '450px',
  },
);
const Img = styled.img(
  {
    display: 'inline-block',
  },
);
const Element = (props) => {
  const { row } = props;
  const urlIMG = `http://image.tmdb.org/t/p/w200${row.poster_path}`;
  const link = `/film/${row.id}`;

  return (

    <DivContent>
      <Link to={link}>
        {' '}
        {row.poster_path && <Img alt="poster" width="220" height="350" src={urlIMG} ></Img>}
      </Link>
      {row.title && <div>{row.title}</div>}
    </DivContent>

  );
};

export default Element;
