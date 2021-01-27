import './Content.css';
import React, { Component } from 'react';


class Element extends Component {
render(){
    const urlIMG='http://image.tmdb.org/t/p/original'+this.props.row.backdrop_path;
console.log(this.props)
    return (
        <div class="content__elem">
        <img alt="poster" width="220" height="200" src={urlIMG}></img>
        <div >{this.props.row.title}</div>
        </div>
    )
}
    

    
}

export default Element;
