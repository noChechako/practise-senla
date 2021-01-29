// import './Content.css';
import { Link } from 'react-router-dom'
import styled from '@emotion/styled';

const DivContent=styled.div(
    {
        margin: '10px',
    border: '1px solid #e3e3e3',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    width: '220px',
    height: '450px'
    }
)

function Element(props) {

    const urlIMG = 'http://image.tmdb.org/t/p/w200' + props.row.poster_path;
    const link='/film/'+props.row.id;
    console.log(props)
    return (
            <DivContent>
                <Link to={link}> {props.row.poster_path && <img alt="poster" width="220" height="350" src={urlIMG}></img>}</Link>
                {props.row.title && <div >{props.row.title}</div>}
            </DivContent>
        

    )

}

export default Element;
