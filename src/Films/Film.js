import './Content.css';
import React, { Component } from 'react';
import APIFilms from '../data/APIFilms'
import FilmContent from '../Films/FilmContent'

class Film extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            rows: []
        };

    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        try{
        const data = await APIFilms.get('/movie/' + id + '?api_key=6be28322108b286b7e45d15ac68bb3b2');
        console.log(data)
        this.setState({
            isLoaded: true,
            rows: data
        });
    } catch(error) {
        this.setState({
            isLoaded: true,
            error
        });
    }
}



render() {
    const { error, isLoaded, rows } = this.state;
    console.log(rows)
    return (error) ?  (
        <span>
            Error: {error.message}
          </span>
    ) : (!isLoaded)?  
      (
        <span>
            Loading...
        </span>
    ) : (
            <FilmContent row={rows}/>
    )


    }
}


export default Film;
