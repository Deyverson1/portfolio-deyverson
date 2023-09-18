import React from "react"
import CardMain from "./Project";
import { useTranslation } from "react-i18next";
function Projects(){
    const { t } = useTranslation();
    return(
        <section className="Content">
            <h1 className="tittle">{t("Projects")}</h1>
            <main className="divContent">
                <CardMain/>
                
            </main>
        </section>
    )
} 
export default Projects