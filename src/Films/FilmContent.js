import styled from '@emotion/styled';
import React from 'react';
import AllComents from '../Reviews/AllComents'

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
    console.log(data)
    let genres = data.genres.map(function (genres) {
        return genres.name;
    })

    console.log(data)
    console.log(data.release_date.slice(0, 4))
    const imgBack = "http://image.tmdb.org/t/p/original" + data.backdrop_path;
    const poster = "http://image.tmdb.org/t/p/original" + data.poster_path;

    return (
<React.Fragment>
<DivFilm img={imgBack}>
            <Img  alt="poster" src={poster}></Img>
            <div>
                <h1> {data.original_title} ({data.release_date.slice(0, 4)})</h1>
                <span>{data.release_date} ({data.production_countries[0].iso_3166_1}) &bull; {genres.join(", ")}  &bull; {data.runtime} min <br></br> <br></br></span>
                <i>{data.tagline}</i>
                <h2>Overview</h2>
                <span>{data.overview}</span>
            </div>
        </DivFilm>
        <AllComents id={data.id}/>
</React.Fragment>
       

    )
}



export default filmContent;
