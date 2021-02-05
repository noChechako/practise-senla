import React, {
    useState,
    useEffect,
} from "react"
import Element from '../components/Films/Element'
import styled from '@emotion/styled';
import getData from '../data/getData'
import getFilms from '../store/loadFilms'
import { useDispatch, useSelector } from 'react-redux';




const DivContent = styled.div(
    {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
)

function Content() {

    const dispatch = useDispatch();
    const page = useSelector(state => state.page)

    const req = `/movie/popular?api_key=6be28322108b286b7e45d15ac68bb3b2&language=en&page=${page}`;
    const [rows, setRow] = useState(null);
    useEffect(() => {
        getData(req).then(row => setRow(row));

    }, [rows]);

    if (rows == null) {
        return (<p>Loading</p>)
    }
    return (<> <DivContent >
        {rows.data.results.map(row => (

            <Element row={row} key={row.id} />
        ))}
    </DivContent>
        <button onClick={() => getFilms(dispatch)}>{page}</button></>
    )





}
/* eslint-disable react/prop-types */


/* eslint-enable react/prop-types */

export default Content;
