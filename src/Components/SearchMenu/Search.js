import React from 'react'
import styled from '@emotion/styled';

/* eslint-disable react/prop-types */
const DivFilter=styled.div({
     width: '300px',
})
const DivFilterElement=styled.div(
    {
      margin: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      alignItems: 'center',
      padding: '14px 16px',
      minWidth: '260px',
      width: '260px',
      border: '1px solid #e3e3e3',
      borderRadius: '5px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }
)
let Field = (props)=>{
    return (<DivFilterElement>
    <h2>{props.name}</h2>
    <span> &#62; </span>
</DivFilterElement>);
}
function Search() {
    return (
        <DivFilter>
            <Field name="Сортировать" />
            <Field name="Фильтры" />
            <Field name="Где посмотреть" />
        </DivFilter>
    );
}

/* eslint-enable react/prop-types */

export default Search;
