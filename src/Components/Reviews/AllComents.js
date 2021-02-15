/*
eslint linebreak-style: ["error", "windows"]
*/
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Coment from './Coment';
import getComents from '../../data/getComents';

const DivComent = styled.div(
  {
    width: '100%',
    margin: '10px',
    position: 'absolute',
    top: '1020px',
  },
);
const H1 = styled.h1(
  {
    textAlign: 'center',
  },
);

const AllComents = ({ id }) => {
  const [rows, setRow] = useState(null);
  useEffect(() => {
    getComents(id).then((row) => setRow(row));
  }, [id]);

  if (rows === null) {
    return <DivComent>Loading</DivComent>;
  }
  return (
    <DivComent>
      <H1>Reviews</H1>
      {rows.data.results.map((row) => (

        <Coment row={row} key={row.id} />
      ))}
    </DivComent>
  );
};

export default AllComents;
