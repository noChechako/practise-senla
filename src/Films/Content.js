import './Content.css';
import Element from './Element';
import React, { Component } from 'react';


class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            rows: []
        };



    }
    // getFilms() {
    //     let movieRows = [];

    //     const urlString = 'https://api.themoviedb.org/3/search/movie?query=marvel&api_key=6be28322108b286b7e45d15ac68bb3b2';
    //     fetch(urlString)
    //         .then(function (response) {
    //             return response.json()
    //         })
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     rows: result
    //                 });
    //                 console.log(result)
    //             })


    // }
    componentDidMount() {
        const urlString = 'https://api.themoviedb.org/3/search/movie?query=marvel&api_key=6be28322108b286b7e45d15ac68bb3b2';
        fetch(urlString)
            .then(function (response) {
                console.log(response)
                return response.json()
            })
            .then((result) => {

                this.setState({
                    isLoaded: true,
                    rows: result
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    render() {

        const { error, isLoaded, rows } = this.state;
// console.log(rows)
        if (error) {
            return (
                <span>
                    Error: {error.message}
                </span>
            );
        } else if (!isLoaded) {
            return (
                <span>
                    Loading...
                </span>
            );
        } else {
            return (
                <div className="content">
                    {rows.results.map(row => <div class="content__elem">{row.original_title}</div>)}
                </div>
            );
        }
    }

}

export default Content;
