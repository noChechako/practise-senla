import React, { useState, useEffect, } from 'react';
// import Coment from './Coment'
import getCasts from '../../data/getCasts'
import Cast from '../Casts/Cast'
import styled from '@emotion/styled';

const DivCasts = styled.div(
    {
        width: '100%',
        margin: '10px',
        position: 'absolute',
        top: '620px',
        overflowX:"scroll"
    }
)
const Ul = styled.ul(
    {
        display:"flex",
        
    }
)
/* eslint-disable react/prop-types */

const AllCasts = (props) => {


    const id = props.id;

    const [rows, setRow] = useState(null);
    useEffect(() => {
        getCasts(id).then(row => setRow(row));

    }, []);
    if (rows === null) {
        return <div>Loading</div>;
    }


    return (
        <DivCasts>
            <h1 >Casts</h1>
            <Ul>
                {rows.data.cast.map(row => (

                    <Cast row={row} key={row.id} />
                ))}
            </Ul>

        </DivCasts>
    )



}
/* eslint-enable react/prop-types */

export default AllCasts;