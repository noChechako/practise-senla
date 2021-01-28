import './Content.css';
import React, { Component } from 'react';

function FilmContent(props) {
    const data = props.row.data;
    let genres = data.genres.map(function (genres) {
        return genres.name;
    })

    console.log(data)
    console.log(data.release_date.slice(0, 4))
    const imgBack = "http://image.tmdb.org/t/p/original" + data.backdrop_path;
    const poster = "http://image.tmdb.org/t/p/original" + data.poster_path;
    let sectionFilm = {
        width: "100%",
        height: "580px",
        background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + imgBack + ") no-repeat",
        backgroundSize: "100%"

    };
    return (
        <div class="film" style={sectionFilm}>
            <img class="film__poster" alt="poster" src={poster}></img>
            <div class="film__description">
                <h1> {data.original_title} ({data.release_date.slice(0, 4)})</h1>
                <span>{data.release_date} ({data.production_countries[0].iso_3166_1}) &bull; {genres.join(", ")}  &bull; {data.runtime}min</span>
                <i>{data.tagline}</i>
                <h2>Overview</h2>
                <span>{data.overview}</span>
            </div>
        </div>
    )
}



export default FilmContent;
