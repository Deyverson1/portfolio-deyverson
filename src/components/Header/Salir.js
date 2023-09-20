import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import './header.css'

export default function Back({onClick}) {
    const { t } = useTranslation();
    return (
    <Button className='b' name="atras" id="atras" role="submit"
        onClick={onClick}>{t('Back')}   
    </Button>
    );
}
const Button = styled.a`
    cursor: pointer;
    font-family: 'Poppins';
    font-size: .8125rem;
    letter-spacing: 0.0625rem;
    width: 5rem;
    padding-bottom: 4rem;
    text-transform: uppercase;
    text-decoration: underline;
    &:hover{
        color: #4169E1;
    }
` 