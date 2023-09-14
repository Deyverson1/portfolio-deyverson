import styled from "@emotion/styled";

export const HeroContent = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin: 7rem 3rem;
    @media screen and (max-width: 425px){
        margin: 5rem 0rem;
    }
`
export const Name = styled.h1`
    font-size: 55px;
    font-weight: 700;
    color: #444444;
    margin: 0;
    @media screen and (max-width: 425px){
        padding: 1rem 2rem;
        font-size: 35px;
    }
`
export const Profession = styled.h2`
    margin-top: 0;
    font-size: 42px;
    font-weight: 500;
    margin-bottom: 0;
    @media screen and (max-width: 425px){
        padding: 0 2rem ;
        font-size: 28px;
    }
    @media screen and (max-width: 375px){
        padding: 0 2rem ;
        font-size: 25px;
    }
   
`
export const Goat = styled.span`
    color: #4169E1;
` 
export const Afirmacion = styled.h3`
    font-size: 18px;
    font-weight: 400;
    color: #444444;
    margin-top: 0; 
    padding-right: 3rem;
    @media screen and (max-width: 425px) {
        padding: 1rem 2rem;
    }
`

export const ImgPoster = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Poster = styled.section`
    box-sizing: border-box;
    width: 500px;
    height: 300px;
    transition: box-shadow .1s ;
    background-size: cover;
    
    &:hover{
        box-shadow: 0px 0px 50px rgba(0,0,0,01);
    }
`
export const ImgHero = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    border-color: rgba(0,0,0,0.1);
    object-fit: cover; 
    box-shadow: 0px 0px 50px rgba(0,0,0,0.5);
    &:hover{
        box-shadow: 0px 0px 50px rgba(0,0,0,0) ;
    }
`

