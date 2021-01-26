import './Content.css';
import React, { Component } from 'react'

class Element extends React.Component{
    render(){
        return (
            <div key={this.props.movie.id} class="content__elem">
            <img ></img>
            <span>{this.props.movie.title}</span>
        </div>
        )
    }
}

export default Element;
