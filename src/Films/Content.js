import React, {
    useState,
    useEffect,
} from "react"
import Element from './Element'
import styled from '@emotion/styled';
import getData from '../data/getData'
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

    const req = '/movie/popular?api_key=6be28322108b286b7e45d15ac68bb3b2&language=en&page=' + page;
    const getFilms = () => {
        dispatch({ type: 'ADD_FILMS', nextPage: 1 })

    }


    return (<><ListFilms props={req} id={page} />

        <button onClick={() => getFilms()}>{page}</button></>
    )





}
/* eslint-disable react/prop-types */

function ListFilms(props) {
    const req = props.props;
    const [rows, setRow] = useState(null);
    useEffect(() => {
        getData(req).then(row => setRow(row));

    }, [props]);
    console.log(req)
    console.log(rows)
    if (rows == null) {
        return (<p>Load</p>)
    }
    return (
        <DivContent key={props.id}>
            {rows.data.results.map(row => (

                <Element row={row} key={row.id} />
            ))}
        </DivContent>)
}
/* eslint-enable react/prop-types */

export default Content;
