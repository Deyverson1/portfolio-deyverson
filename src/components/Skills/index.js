import styled from "styled-components";

export const SkillSection = styled.section`
    margin: 20px; 
    padding-top: 3rem;
`

export const Title = styled.h1`
    margin: 0;
    padding: 0;
    padding-left: 12px;
    letter-spacing: 0.0625rem;
`


export const SkillsContent = styled.section`
    display: flex;
    justify-content: space-between;

`

export const Card = styled.div`
    border-radius: 7px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 300px;
    text-align: center;
    margin: 12px;
    border: 1px solid #444444;
    border-radius: 15px;
    transition: .5s;
    &:hover{
        background-color: #4169E1;
    }
`

export const Img = styled.img`
    width: 15vh;
    /* padding-top: 15px; */
`

export const H3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.0625rem;

`