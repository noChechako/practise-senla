/*
eslint linebreak-style: ["error", "windows"]
*/
import React, {
  useState,
  useEffect,
} from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import Element from '../Components/Films/Element';
import getFilms from '../data/getFilms';
import loadFilms from '../store/loadFilms';

const DivContent = styled.div(
  {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
);

const Content = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  const [rows, setRow] = useState(null);

  useEffect(() => {
    getFilms(page).then((row) => setRow(row));
  }, [page]);

  if (rows == null) {
    return (<p>Loading</p>);
  }

  return (
    <>
      {' '}
      <DivContent>
        {rows.data.results.map((row) => (
          <Element row={row} key={row.id} />
        ))}
      </DivContent>
      <button type="button" onClick={() => loadFilms(dispatch)}>{page}</button>
    </>
  );
};

export default Content;
