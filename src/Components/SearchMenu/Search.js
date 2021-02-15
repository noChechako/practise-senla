/*
eslint linebreak-style: ["error", "windows"]
*/
import React from 'react';
import styled from '@emotion/styled';
import SearchFilters from './SearchFilters';

const DivFilter = styled.div({
  width: '300px',
});

const DivFilterElement = styled.div(
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
  },
);
const Field = ({ name }) => (
  <DivFilterElement>
    <h2>{name}</h2>
    <span> &#62; </span>
  </DivFilterElement>
);
function Search() {
  return (
    <DivFilter>
      <Field name="Сортировать" />
      <SearchFilters> <DivFilterElement>
    <h2>Filters</h2>
    <span> &#62; </span>
  </DivFilterElement></SearchFilters>
      <Field name="Где посмотреть" />
    </DivFilter>
  );
}

export default Search;
