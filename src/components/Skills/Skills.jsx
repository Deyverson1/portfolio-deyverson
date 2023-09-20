import React from "react";
import styled from "styled-components";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { useColor } from '../Header/ColorContext';
import './skills.css'

function Skills() {
  const { color } = useColor();
  const { t } = useTranslation();
  return (
    <section className="skills">
      <header className="headerSkills">
        <h2 className="title">{t("Skills")}</h2>
        <hr className="hr"/>
      </header>
      <section className="skillContent">
        <Card className="skillCard" color={color}>
          <LanguageIcon
            fontSize="large"
            style={{ color: color || '#4a98bf' }}
       
            className="icon"
          />
          <h3 className="titleSkill"> {t("SkillsTittle1")}</h3>
          <p className="description"> {t("SkillsDescription1")}</p>
        </Card>
        <Card className="skillCard"  color={color}>
          <WebIcon
            fontSize="large"
            style={{ color: color || '#4a98bf' }}
         
            className="icon"
          />
          <h3 className="titleSkill"> {t("SkillsTittle2")}</h3>
          <p className="description"> {t("SkillsDescription2")}</p>
        </Card >
        <Card className="skillCard" color={color}>
          <CodeIcon
            fontSize="large"
            style={{ color: color || '#4a98bf' }}
          
            className="icon"
          />
          <h3 className="titleSkill"> {t("SkillsTittle3")} </h3>
          <p  className="description"> {t("SkillsDescription3")} </p>
        </Card>
      </section>
    </section>
  );
}
const Card = styled.div`
  border: 1px solid ${(props) => props.color || '#4a98bf'};
  &:hover {
    background-color: ${(props) => props.color || '#4a98bf'};
    > .icon {
      color: white !important;
    }
  }
`;
export default Skills;