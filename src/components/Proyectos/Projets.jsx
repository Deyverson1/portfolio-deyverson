import React from "react"
import CardMain from "./Project";
import { useTranslation } from "react-i18next";
// import styled from 'styled-components';
import './project.css'

function Projects(){
    const { t } = useTranslation();
    return(
        <section className="Content">
            <header className="headerProject">
            <h1 className="tittleProject">{t("Projects")}</h1>
            </header>
            <main className="divContent">
                <CardMain/>
            </main>
        </section>
    )
}
export default Projects

