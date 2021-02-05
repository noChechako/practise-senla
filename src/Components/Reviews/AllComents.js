import React, { useState, useEffect, } from 'react';
import Coment from './Coment'
import getData from '../../data/getFilm'
import styled from '@emotion/styled';

const DivComent = styled.div(
    {
        width: '100%',
        margin: '10px',
        position: 'absolute',
        top: '620px',
    }
)
/* eslint-disable react/prop-types */

let AllComents = (props) => {



    const req = '/movie/' + props.id + '/reviews?api_key=6be28322108b286b7e45d15ac68bb3b2';

    const [rows, setRow] = useState(null);
    useEffect(() => {
        getData(req).then(row => setRow(row));

    }, []);

    if (rows === null) {
        return <DivComent>Loading</DivComent>;
    }
    return (
        <DivComent>
            <h1>Reviews</h1>
            {rows.data.results.map(row => (

                <Coment row={row} key={row.id} />
            ))}
        </DivComent>
    )



}
/* eslint-enable react/prop-types */

export default AllComents;