import React from "react"
import ImgMediaCard from "./Project"
import { DivContent, Content, H1} from "./Index"

function Projects(){
    return(
        <Content>
            <H1>Projects</H1>
            <DivContent>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
                <ImgMediaCard/>
            </DivContent>
        </Content>
        
        
        
    )
} 

export default Projects