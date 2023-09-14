import React from 'react';
import styled from 'styled-components';

export default function Back({onClick}) {
    return (
    <Button name="atras" id="atras" role="submit"
        onClick={onClick}>Back    
    </Button>
    );
}
const Button = styled.a`
    cursor: pointer;
    font-family: 'Poppins';
    font-size: .8125rem;
    letter-spacing: 0.0625rem;
    width: 5rem;
    padding-top: 1rem;
    text-transform: uppercase;
    text-decoration: underline;
    &:hover{
        color: #4169E1;
    }
` 