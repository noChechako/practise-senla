  import React, {
    useState,
    useEffect,
   
  } from "react"
import {useParams} from "react-router"
import FilmContent from '../components/Films/FilmContent'
import getData from '../data/getData'

/* eslint-disable react/prop-types */



let Film=()=>{
  
  const {id}=useParams();
  const req=`/movie/${id}?api_key=6be28322108b286b7e45d15ac68bb3b2`;
 
  const [rows, setRow] = useState(null);
   useEffect(() => {
    getData(req).then(row => setRow(row));

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
