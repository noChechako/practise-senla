/*
eslint linebreak-style: ["error", "windows"]
*/
import React from 'react';
import styled from '@emotion/styled';
import Genres from './Genres';
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-trailing-spaces */
// const DivBlock = styled.div(
//     {
//         // margin: '10px',
//         padding: '-14px -16px',

//         width: '280px',
//         height: '100px',
//         border: '1px solid #e3e3e3',
//     },
// );
const DivFilterElementMain = styled.div(
    {
        margin: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        padding: '14px 16px',
        alignItems: 'center',
        minWidth: '260px',
        width: '260px',
        border: '1px solid #e3e3e3',
        borderRadius: '5px',
    },
);
const DivFilterElement = styled.div(
    {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
);
const Span = styled.span(
    {
        cursor: 'pointer',
    },
);
const Content = styled.div(
    {       
        display: 'block',
        borderTop: '1px solid #e3e3e3',
    },
);

function SearchFilters() {
    const handleClick = () => {
        if (Content.__emotion_styles[0].display === 'none') {
            Content.__emotion_styles[0].display = 'block';
        }
        else Content.__emotion_styles[0].display = 'none';
        console.log(Content.__emotion_styles[0].display)
    };
    return (
        <>
            <DivFilterElementMain>
                <DivFilterElement>
                    <h2>Filters</h2>
                    <Span onClick={() => handleClick()}> &#62; </Span>
                </DivFilterElement>
                <Content>
                    <Genres/>
                </Content>
            </DivFilterElementMain>
        </>
    );
}

export default SearchFilters;