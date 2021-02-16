/*
eslint linebreak-style: ["error", "windows"]
*/
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import getGenres from '../../data/getGenres';
import Genre from './Genre';

const Ul = styled.ul(
  {
    marginLeft: '-40px',
  },
);
const Genres = () => {
  const [rows, setRow] = useState(null);
  useEffect(() => {
    getGenres().then((row) => setRow(row));
  });
  if (rows == null) {
    return (<p>Loading</p>);
  }
  return (
        <>
            <h3>Genres</h3>
            <Ul>
                {rows.data.genres.map((row) => (

                    <Genre row={row} key={row.id} />
                ))}
            </Ul>
        </>
  );
};
export default Genres;
