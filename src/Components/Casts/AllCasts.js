/*
eslint linebreak-style: ["error", "windows"]
*/
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import getCasts from '../../data/getCasts';
import Cast from './Cast';

const DivCasts = styled.div(
  {
    width: '100%',
    margin: '10px',
    position: 'absolute',
    top: '620px',
    overflowX: 'scroll',
  },
);
const Ul = styled.ul(
  {
    display: 'flex',

  },
);

const AllCasts = ({ id }) => {
  const [rows, setRow] = useState(null);

  useEffect(() => {
    getCasts(id).then((row) => setRow(row));
  }, [id]);

  if (rows === null) {
    return <div>Loading</div>;
  }

  return (
    <DivCasts>
      <h1>Casts</h1>
      <Ul>
        {rows.data.cast.map((row) => (
          <Cast row={row} key={row.id} />
        ))}
      </Ul>
    </DivCasts>
  );
};

export default AllCasts;
