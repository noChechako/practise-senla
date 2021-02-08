import React, {
    useState,
    useEffect,
} from "react"
import Element from '../components/Films/Element'
import styled from '@emotion/styled';
import getFilms from '../data/getFilms'
import loadFilms from '../store/loadFilms'
import { useDispatch, useSelector} from 'react-redux';




const DivContent = styled.div(
    {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
)

const Content =()=> {

    const dispatch = useDispatch();
    const page = useSelector(state => state.page)

    const [rows, setRow] = useState(null);
    useEffect(() => {
        getFilms(page).then(row => setRow(row));

    }, [rows]);
    console.log(page)
    if (rows == null) {
        return (<p>Loading</p>)
    }
    return (<> <DivContent >
        {rows.data.results.map(row => (

            <Element row={row} key={row.id} />
        ))}
    </DivContent>
        <button onClick={() => loadFilms(dispatch)}>{page}</button></>
    )





}


export default Content;
