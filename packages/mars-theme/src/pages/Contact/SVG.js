import React from 'react';
import { styled } from 'frontity';

const SVG = ({ title, path }) => {
    return (
        <Svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{`${title} icon`} </title>
            <path d={path} />
        </Svg>
    );
}

export default SVG;

const Svg = styled.svg`
    width: 32px;
    margin-right: 15px;
`;