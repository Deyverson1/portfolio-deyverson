import React from 'react';
import { Link } from '@mui/material';
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
` 
// underline="hover"
// color="#000000"
// fontFamily={'Poppins'}
// fontSize={'13px'}
// letterSpacing={'0.0625rem'}
// textTransform={'uppercase'}
// paddingTop={'1rem'}
// cursor={'pointer'}

