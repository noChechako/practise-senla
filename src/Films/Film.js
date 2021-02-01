import './Content.css';
import React, {
  useState,
  useEffect
} from "react";
import FilmContent from '../Films/FilmContent'
import getData from '../data/getData'

/* eslint-disable react/prop-types */



let Film=(props)=>{
  const req='/movie/' + props.match.params.id+ '?api_key=6be28322108b286b7e45d15ac68bb3b2';
  const [rows, setRow] = useState(null);
   useEffect(() => {
    getData(req).then(row => setRow(row));

  }, []);
  if (rows === null) {
    return <p>Loading</p>;
  }
  console.log(rows)
  return (
   
   <FilmContent row={rows}/>
  
  )
}
/* eslint-enable react/prop-types */


export default Film;
