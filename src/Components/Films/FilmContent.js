/*
eslint linebreak-style: ["error", "windows"]
*/
import styled from '@emotion/styled';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import AllComents from '../Reviews/AllComents';
import AllCasts from '../Casts/AllCasts';
import getTrailer from '../../data/getTrailer';

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable  @typescript-eslint/semi */
/* eslint-disable  no-trailing-spaces */
/* eslint-disable   no-underscore-dangle */
/* eslint-disable  arrow-parens */

const Span = styled.span(
  {
    display: 'block',
    paddingBottom: '10px',
  },
);
const DivFilm = styled.div(
  {

    width: '100%',
    height: '580px',
    margin: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  (props) => ({ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${props.img}) no-repeat` }),
  { backgroundSize: '100%' },
);

const Img = styled.img(
  {
    padding: '30px',
    width: '340px',
    height: '520px',
  },
);

const Trailer = styled.p(
  {
    cursor: 'pointer',
  },
);
const opts = {
  height: '490',
  width: '700',
  playerVars: {
    autoplay: 1,
  },
};
const Video = styled.div(
  {
      position: 'absolute',
  top: '50%',
  left: '50%',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  },
);

const Modal = styled.div(
  {
      display: 'none',
      position: 'fixed',
      top: '0',
      right: '0',
      left: '0',
      bottom: '0',
      background: 'rgb(0, 0, 0, 0.5)',
  },
);
const Close = styled.div(
  {
      cursor: 'pointer',
      position: 'absolute',
      top: '-5px',
      left: '710px',
  },
);
const FilmContent = ({ row }) => {
  const { data } = row;
  const genres = data.genres.map((genre) => genre.name);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(null);
    } else {
      getTrailer(movie)
        .then((res) => {
          console.log(res.data)
          const id = res.data.results.find(item => item.type === 'Trailer')
          Modal.__emotion_styles[0].display = 'block';
          setTrailerUrl(id.key);
        })
        .catch(() => console.log('Error'));
    }
  };

  const handleClose = () => {
    setTrailerUrl('');
    Modal.__emotion_styles[0].display = 'none'
}

  const imgBack = `http://image.tmdb.org/t/p/original${data.backdrop_path}`;
  const poster = `http://image.tmdb.org/t/p/original${data.poster_path}`;

  return (
    <>
      <DivFilm img={imgBack}>
        <Img alt="poster" src={poster} />
        <div>
          <h1>
            {' '}
            {data.original_title}
            {' '}
            (
            {data.release_date.slice(0, 4)}
            )
          </h1>
          <Span>
            {data.release_date}
            {' '}
            (
            {data.production_countries[0].iso_3166_1}
            ) &bull;
            {' '}
            {genres.join(', ')}
            {' '}
            &bull;
            {' '}
            {data.runtime}
            {' '}
            min
            {' '}
          </Span>
          <i>
            {data.tagline}
            {' '}
            <br />
          </i>
          <Trailer onClick={() => handleClick(data.id)}>Trailer</Trailer>
          <h2>Overview</h2>
          <span>{data.overview}</span>
          <Modal>
            <Video>{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} <Close onClick={() => handleClose()} >&#9746;</Close>  </Video>
          </Modal>

        </div>
      </DivFilm>
      <AllCasts id={data.id} />
      <AllComents id={data.id} />
    </>

  );
};
/* eslint-enable @typescript-eslint/indent */

export default FilmContent;
