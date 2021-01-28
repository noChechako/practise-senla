import './Content.css';
import { Link } from 'react-router-dom'
function Element(props) {

    const urlIMG = 'http://image.tmdb.org/t/p/w200' + props.row.poster_path;
    const link='/film/'+props.row.id;
    console.log(props)
    return (
            <div class="content__elem">
               
                <Link to={link}> {props.row.poster_path && <img alt="poster" width="220" height="350" src={urlIMG}></img>}</Link>
                {props.row.title && <div >{props.row.title}</div>}
            </div>
        

    )

}

export default Element;
