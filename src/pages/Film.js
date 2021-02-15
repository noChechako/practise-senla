/*
eslint linebreak-style: ["error", "windows"]
*/
import React, {
  useState,
  useEffect,
} from 'react';
import { useParams } from 'react-router';
import getFilm from '../data/getFilm';
import FilmContent from '../Components/Films/FilmContent';

const Film = () => {
  const { id } = useParams();
  const [rows, setRow] = useState(null);

  useEffect(() => {
    getFilm(id).then((row) => setRow(row));
  }, [id]);

  if (rows === null) {
    return <p>Loading</p>;
  }

  return (
    <>
      <FilmContent row={rows} />
    </>
  );
};

export default Film;
