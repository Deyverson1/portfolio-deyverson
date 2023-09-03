import React from "react";
import { Card, SkillsContent, Title, SkillSection, Img, H3 } from ".";


function Skills() {

    return ( <SkillSection>
        <Title>Skills</Title>
        <SkillsContent>
            <Card>
                <Img src="/img/programacion-web.png" alt="" />
                <H3>Optimizacion</H3>
                <p>Buscar el mejor rendimiento en todos los sentidos </p>
            </Card>
            <Card>
                <Img src="/img/codificacion-.png" alt="" />
                <H3>Escalabilidad</H3>
                <p>Programar entornos adaptables acordes a los requerimientos del proyectos</p>
            </Card>
            <Card>
                <Img src="/img/datos.png" alt="" />
                <H3>Escalabilidad</H3>
                <p>Programar entornos adaptables acordes a los requerimientos del proyectos</p>
            </Card>
        </SkillsContent>
        </SkillSection>
    )
  
}


export default Skills;