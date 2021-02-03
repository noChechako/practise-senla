import React, { Component } from 'react';
import Coment from './Coment'
import getData from '../../data/getData'
import styled from '@emotion/styled';


const DivComent=styled.div(
    {
        width: '100%',
        margin: '10px',
         position: 'absolute',
         top: '620px',
    }
)
/* eslint-disable react/prop-types */

class AllComents extends Component {
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
            const reviewsData = await getData('/movie/'+this.props.id+'/reviews?api_key=6be28322108b286b7e45d15ac68bb3b2');
            this.setState({
             isLoaded: true,
             rows: reviewsData
         });
          } catch (error) {
             this.setState({
                 isLoaded: true,
                 error
             });
          }
    }
    render(){
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
                <DivComent>
                <h1>Reviews</h1>
                    {rows.data.results.map(row=> (
                        
                        <Coment row={row} key={row.id}/>
                    ))}
                </DivComent>
            )
        
    }

}
/* eslint-enable react/prop-types */

export default AllComents;