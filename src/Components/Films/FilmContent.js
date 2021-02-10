import styled from '@emotion/styled';
import React, {  useState } from 'react';
import AllComents from '../Reviews/AllComents'
import AllCasts from '../Casts/AllCasts'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

/* eslint-disable no-unused-vars */

const Span=styled.span(
    {
        display: 'block',
        paddingBottom: '10px'
    }
)
const DivFilm = styled.div(
    {
       
        width: "100%",
        height: '580px',
        margin: "10px",
        color: "white",
        display:'flex',
        justifyContent: 'flex-start'
    },
    props => ({ background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + props.img + ") no-repeat" }),
    { backgroundSize: "100%" }
);

const Img = styled.img(
    {
        padding: "30px",
        width: "340px",
        height: "520px"
    }
)




let filmContent =(props)=> {
    const data = props.row.data;
    let genres = data.genres.map(function (genres) {
        return genres.name;
    })
    const [trailerUrl, setTrailerUrl] = useState("");
    const handleClick = (movie) => {
        console.log(movie)
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer( null, { tmdbId: movie } )
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams)
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(() => console.log('Error'))
        }
        

        
    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }
    
    const imgBack = `http://image.tmdb.org/t/p/original${data.backdrop_path}`;
    const poster = `http://image.tmdb.org/t/p/original${data.poster_path}`;

    return (
<>
<DivFilm img={imgBack}>
            <Img  alt="poster" src={poster}></Img>
            <div>
                <h1> {data.original_title} ({data.release_date.slice(0, 4)})</h1>
                <Span>{data.release_date} ({data.production_countries[0].iso_3166_1}) &bull; {genres.join(", ")}  &bull; {data.runtime} min </Span>
                <i>{data.tagline} <br></br></i>
                <div onClick={()=>handleClick(data.id)} >Trailer</div>
                <h2>Overview</h2>
                <span>{data.overview}</span>
                <div>  {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/> }</div>
            </div>
        </DivFilm>
        <AllCasts id={data.id}/>
        <AllComents id={data.id}/>
</>
       

    )
}
/* eslint-enable no-unused-vars */



export default filmContent;
