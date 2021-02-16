/*
eslint linebreak-style: ["error", "windows"]
*/
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Genres from './Genres';
/* eslint-disable no-underscore-dangle */

const DivFilterElementMain = styled.div(
  {
    margin: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    alignItems: 'center',
    minWidth: '260px',
    width: '260px',
    border: '1px solid #e3e3e3',
    borderRadius: '5px',
    padding: '14px 16px',
  },
);
const DivFilterElement = styled.div(
  {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    display: 'flex',
  },
);
const Span = styled.span(
  {
    cursor: 'pointer',
  },
);
const Content = styled.div(
  {
    borderTop: '1px solid #e3e3e3',
  },
);

const SearchFilters = () => {
  const [style, setDisplay] = useState({ display: 'none' });
  const handleClick = () => {
    if (style.display === 'none') {
      setDisplay({ display: 'block' });
    } else setDisplay({ display: 'none' });
  };
  return (
        <>
            <DivFilterElementMain>
                <DivFilterElement>
                    <h2>Filters</h2>
                    <Span onClick={() => handleClick()}> &#62; </Span>
                </DivFilterElement>
                <Content style = {style}>
                    <Genres/>
                </Content>
            </DivFilterElementMain>
        </>
  );
};

export default SearchFilters;
