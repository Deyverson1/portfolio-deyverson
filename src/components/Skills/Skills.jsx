import React from "react";
import { Card, SkillsContent, Title, SkillSection } from ".";


function Skills() {

    return ( <SkillSection>
        <Title>Skills</Title>
        <SkillsContent>
            <Card>
                <img src="" alt="" />
                <h3>Optimizacion</h3>
                <p>Buscar el mejor rendimiento en todos los sentidos </p>
            </Card>
            <Card>
                <img src="" alt="" />
                <h3>Escalabilidad</h3>
                <p>Programar entornos adaptables acordes a los requerimientos del proyectos</p>
            </Card>
            <Card>
                <img src="" alt="" />
                <h3>Escalabilidad</h3>
                <p>Programar entornos adaptables acordes a los requerimientos del proyectos</p>
            </Card>
        </SkillsContent>
        </SkillSection>
    )
  
}


export default Skills;