
import React, { Component } from 'react';


class Film extends Component {
    render() {

        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}


export default Film;
