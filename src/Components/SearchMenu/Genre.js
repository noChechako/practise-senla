/*
eslint linebreak-style: ["error", "windows"]
*/
import React from 'react';
import styled from '@emotion/styled';
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable eol-last */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/brace-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
const Li = styled.li`
    cursor:pointer;
    display: inline-flex;
    listStyleType: none;
    border: 1px solid #9e9e9e;
    border-radius: 14px;
    padding: 4px 12px;
    margin-right: 6px;
    margin-top: 8px;
       &:hover {
        background-color: #00FFFF;
      }
`;
const Genre = (props) => {
    return (
        <>
            <Li data-value={props.row.id}>
                {props.row.name}
            </Li>
        </>
    )
}
export default Genre;