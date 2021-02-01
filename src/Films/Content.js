import React, { Component } from 'react';
import Element from './Element'
import styled from '@emotion/styled';
import getData from '../data/getData'

const DivContent = styled.div(
    {
        width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }
)

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            rows: []
        };

    }

    async componentDidMount() {
     try {
       const filmsData = await getData('/search/movie?query=marvel&api_key=6be28322108b286b7e45d15ac68bb3b2');
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
                <DivContent>
                    {rows.data.results.map(row=> (
                        
                        <Element row={row} key={row.id}/>
                    ))}
                </DivContent>
            )
        }
    

}

export default Content;
