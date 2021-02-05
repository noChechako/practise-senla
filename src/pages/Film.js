  import React, {
    useState,
    useEffect,
   
  } from "react"
import {useParams} from "react-router"
import FilmContent from '../components/Films/FilmContent'
import getFilm from '../data/getFilm'

/* eslint-disable react/prop-types */



let Film=()=>{
  
  const {id}=useParams();
  
 
  const [rows, setRow] = useState(null);
   useEffect(() => {
    getFilm(id).then(row => setRow(row));

  }, []);
  if (rows === null) {
    return <p>Loading</p>;
  }
  return (
    <>
   <FilmContent row={rows}/>
   </>
  )
}
/* eslint-enable react/prop-types */


export default Film;
