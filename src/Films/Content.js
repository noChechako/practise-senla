import './Content.css';
import React, { Component } from 'react';
import Element from './Element'
import APIFilms from '../data/APIFilms'


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
    // componentDidMount() {
    //     const urlString = 'https://api.themoviedb.org/3/search/movie?query=marvel&api_key=6be28322108b286b7e45d15ac68bb3b2';
    //     fetch(urlString)
    //         .then(function (response) {
    //             console.log(response)
    //             return response.json()
    //         })
    //         .then((result) => {

    //             this.setState({
    //                 isLoaded: true,
    //                 rows: result
    //             });
    //         },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )

    // }
    async componentDidMount() {

        // const urlString = 'https://api.themoviedb.org/3/search/movie?query=marvel&api_key=6be28322108b286b7e45d15ac68bb3b2';
        // axios.get(urlString)
        //     .then(res => {
        //         console.log(res)
        //         this.setState({
        //             isLoaded: true,
        //             rows: res
        //         });
        //     },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )

     try {
       let filmsData = await APIFilms.get('/search/movie?query=marvel&api_key=6be28322108b286b7e45d15ac68bb3b2&language=ru');
       this.setState({
        isLoaded: true,
        rows: filmsData
    });
     } catch (error) {
        this.setState({
            isLoaded: true,
            error
        });
     }
    }
    render() {

        const { error, isLoaded, rows } = this.state;
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
                <div className="content">
                    {rows.data.results.map(row=> (
                        
                        <Element row={row}/>
                    ))}
                </div>
            )
        }
    

}

export default Content;
