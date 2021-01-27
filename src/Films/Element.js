import './Content.css';


function Element(props) {
    
        const urlIMG = 'http://image.tmdb.org/t/p/w200' + props.row.poster_path;
        console.log(props.row.poster_path)
        return (
            <div class="content__elem">
                
                {props.row.poster_path && <img alt="poster" width="220" height="350" src={urlIMG}></img>}
                {props.row.title && <div >{props.row.title}</div>}
            </div>
        )




    }

    export default Element;
