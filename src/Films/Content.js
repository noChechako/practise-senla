import './Content.css';
import Element from './Element';
import React, { Component } from 'react';


class Content extends Component {
    constructor(props) {
        super(props)
        this.state={};
        this.getFilms();
        
    }
    getFilms() {
        let movieRows = [];

        const urlString = 'https://api.themoviedb.org/3/search/movie?query=marvel&api_key=6be28322108b286b7e45d15ac68bb3b2';
        fetch(urlString)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                let info = data.results;
                console.log(info)
                info.forEach(movie => {
                    const movieRow = <Element movie={movie} />
                    movieRows.push(movieRow);
                    
                });
                console.log(this)
            this.setState({rows:movieRows})
            // this.state.rows=movieRows;
            // this.setState({}); 

            })
        

    }




    render() {
        return (<div class="content" >
            {this.state.rows}
        </div>)

    }
}

export default Content;
