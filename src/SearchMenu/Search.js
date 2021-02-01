import './Search.css';
import React from 'react'
/* eslint-disable react/prop-types */

let Field = (props)=>{
    return (<div className="filter__elem card_closed">
    <h2>{props.name}</h2>
    <span> &#62; </span>
</div>);
}
function Search() {
    return (
        <div className="filter">
            <Field name="Сортировать" />
            <Field name="Фильтры" />
            <Field name="Где посмотреть" />
        </div>
    );
}

/* eslint-enable react/prop-types */

export default Search;
