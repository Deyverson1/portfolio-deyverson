import styled from "@emotion/styled";

export const HeroContent = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin: 4rem 50px;
`
export const Name = styled.h1`
    font-size: 55px;
    font-weight: 700;
    color: #444444;
    margin: 0;
`
export const Profession = styled.h2`
    margin-top: 0px;
    font-size: 42px;
    font-weight: 500;
`
export const Goat = styled.span`
    color: #4169E1;
` 

export const Afirmacion = styled.h3`
    font-size: 18px;
    font-weight: 400;
    color: #444444;
`

export const ImgPoster = styled.div`
    display: flex;
    align-items: center;
`

export const Poster = styled.section`
    box-sizing: border-box;
    width: 500px;
    height: 300px;
    transition: box-shadow .1s ;
    box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.1),
    -10px -10px 10px 10px rgba(0,0,0,0.1);
    background-size: cover;
`
export const ImgHero = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    border-color: rgba(0,0,0,0.1);
    object-fit: cover; 
`

