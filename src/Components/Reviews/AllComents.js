import React, { useState, useEffect, } from 'react';
import Coment from './Coment'
import getComents from '../../data/getComents'

import styled from '@emotion/styled';

const DivComent = styled.div(
    {
        width: '100%',
        margin: '10px',
        position: 'absolute',
        top: '620px',
    }
)
const H1=styled.h1(
    {
        textAlign:"center"
    }
)
/* eslint-disable react/prop-types */

const AllComents = (props) => {


const id=props.id;

    const [rows, setRow] = useState(null);
    useEffect(() => {
        getComents(id).then(row => setRow(row));

    }, []);

    if (rows === null) {
        return <DivComent>Loading</DivComent>;
    }
    return (
        <DivComent>
            <H1>Reviews</H1>
            {rows.data.results.map(row => (

                <Coment row={row} key={row.id} />
            ))}
        </DivComent>
    )



}
/* eslint-enable react/prop-types */

export default AllComents;